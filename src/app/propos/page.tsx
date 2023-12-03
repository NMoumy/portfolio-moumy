import '../styles/propos.scss'

export default function Projet() {
  return (
    <main className='mainProjet'>
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

      <section className='section-competence'>
        <h1 className='titre-competence'>Mes Competences</h1>
        <div className='bloc-competence'>
          <div className='bloc-prog'></div>
          <div className='bloc-creation'></div>
        </div>
      </section>

    </main>
  )
}