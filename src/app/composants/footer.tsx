import '../styles/footer.scss'

export default function Footer() {
  return (
    <footer className='piedDePage'>
      <div className='deco-pied-page'><img src="./svg/deco-pied-page.svg" alt="" /></div>
      <div className='contacte'>
        <h2>contact</h2>
        <p>moumyndiaye@outlook.com</p>
      </div>
      <div className='liens'>
        <a href="https://www.linkedin.com/in/moumy-ndiaye-31988b290/"><img src="./icones/linkedin.png" alt="linkedin" /></a>
        <a href="https://github.com/NMoumy"><img src="./icones/github.png" alt="github" /></a>
      </div>
      <p>© 2023 Moumy Ndiaye | Tous droits réservés</p>

    </footer>
  )
}
