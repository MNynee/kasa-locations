import React from 'react'
import Banner from '../../components/Banner'
import Collapse from '../../components/Collapse'
import '../../main.css'

const About = () => {
  return (
    <div className="page">
        <Banner isHome={false} />
        <section className="collapse-list">
          <Collapse>
            <div className="collapse__title"><h2>Fiabilité</h2> <img src="../../src/assets/arrow.svg" alt="Arrow" className="collapse__btn" /> </div>
            <div className="collapse__text">Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</div>
          </Collapse>
          <Collapse>
            <div className="collapse__title"><h2>Respect</h2> <img src="../../src/assets/arrow.svg" alt="Arrow" className="collapse__btn" /> </div>
            <div className="collapse__text">La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</div>
          </Collapse>
          <Collapse>
            <div className="collapse__title"><h2>Service</h2> <img src="../../src/assets/arrow.svg" alt="Arrow" className="collapse__btn" /> </div>
            <div className="collapse__text">La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.</div>
          </Collapse>
          <Collapse>
            <div className="collapse__title"><h2>Securité</h2> <img src="../../src/assets/arrow.svg" alt="Arrow" className="collapse__btn" /> </div>
            <div className="collapse__text">La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</div>
          </Collapse>
        </section>
    </div>
  )
}

export default About