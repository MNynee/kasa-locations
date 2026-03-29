import React from 'react'
import { useState } from 'react'
import Banner from '../../components/Banner'
import Collapse from '../../components/Collapse'
import '../../main.css'

const About = () => {
  const [reliabilityOpen, setReliabilityOpen] = useState(false)
  const [respectOpen, setRespectOpen] = useState(false)  
  const [serviceOpen, setServiceOpen] = useState(false)
  const [securityOpen, setSecurityOpen] = useState(false)

  return (
    <div className="page">
        <Banner isHome={false} />
        <section className="collapse-list">
          <Collapse>
            <div className="collapse__title">
              <h2>Fiabilité</h2>
              <img src="../../src/assets/arrow.svg" alt="Arrow" className={`collapse__btn ${reliabilityOpen ? 'open' : 'close'}`} onClick={() => setReliabilityOpen(!reliabilityOpen)} />
            </div>
            <div className={`collapse__text ${reliabilityOpen ? 'open' : 'close'}`}> 
              <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>
            </div>
          </Collapse>
          <Collapse>
            <div className="collapse__title">
              <h2>Respect</h2>
              <img src="../../src/assets/arrow.svg" alt="Arrow" className={`collapse__btn ${respectOpen ? 'open' : 'close'}`} onClick={() => setRespectOpen(!respectOpen)} />
            </div>
            <div className={`collapse__text ${respectOpen ? 'open' : 'close'}`}>
              <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
            </div>
          </Collapse>
          <Collapse>
            <div className="collapse__title">
              <h2>Service</h2>
              <img src="../../src/assets/arrow.svg" alt="Arrow" className={`collapse__btn ${serviceOpen ? 'open' : 'close'}`} onClick={() => setServiceOpen(!serviceOpen)} />
            </div>
            <div className={`collapse__text ${serviceOpen ? 'open' : 'close'}`}>
              <p>La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.</p>
            </div>
          </Collapse>
          <Collapse>
            <div className="collapse__title">
              <h2>Securité</h2>
              <img src="../../src/assets/arrow.svg" alt="Arrow" className={`collapse__btn ${securityOpen ? 'open' : 'close'}`} onClick={() => setSecurityOpen(!securityOpen)} />
            </div>
            <div className={`collapse__text ${securityOpen ? 'open' : 'close'}`}>
              <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
            </div>
          </Collapse>
        </section>
    </div>
  )
}

export default About