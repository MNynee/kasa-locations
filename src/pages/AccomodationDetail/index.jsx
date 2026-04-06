import React from 'react'
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Collapse from '../../components/Collapse'
import Carousel from '../../components/Carousel'
import '../../main.css'

const AccomodationDetail = () => {
  const [accomodations, setAccomodations] = useState([])
  const { id } = useParams()

  useEffect(() => {
    async function fetchAccomodations() {
      const response = await fetch('/data/logements.json')
      const data = await response.json()
      setAccomodations(data)
    }
    fetchAccomodations()
  }, [])

  const getAccomodationById = (id) => {
    return accomodations.find(accomodation => accomodation.id === id)
  }

  const accomodation = getAccomodationById(id)
  const navigate = useNavigate()

  if (!accomodation) {
    return (
      <div className="page">
        <button onClick={() => navigate(-1)} className="back-button">
        ← Retourner
        </button>
        <section className="accomodation-not-found error">
          <h1 className='accomodation error__title'>Logement non trouvé.</h1>
          <p className='error__message'>Le logement demandé n'existe pas.</p>
        </section>
      </div>
    )
  }

  const ratingValue = Number(accomodation.rating) || 0
  const maxStars = 5
  const stars = Array.from({ length: maxStars }, (_, index) => index + 1)

  return (
    <div className='page'>
      <Carousel accomodation={accomodation} />
      <section className="accomodation">
        <div className="accomodation__data-container">
          <div className='accomodation__details'>
            <h1 className="accomodation__title">{accomodation.title}</h1>
            <p className="accomodation__location">{accomodation.location}</p>
            <ul className='accomodation__tags'>
              {(accomodation.tags || []).map((tag, index) => (
                <li key={`tag-${index}`} className="accomodation__tag">{tag}</li>
              ))}
            </ul>
          </div>
          <div className="accomodation__rating-host">
            <div className="accomodation__rating">
              {stars.map((star, index) => (
                star <= ratingValue ? (<img key={`star-${index}`} src='../../src/assets/full-star.svg' alt='filled star' className='accomodation__star active'/>) : (<img key={`star-${index}`} src='../../src/assets/empty-star.svg' alt='empty star' className='accomodation__star inactive'/>)
              ))}
            </div>
            <div className="accomodation__host">
              <p className="accomodation__host-name">{accomodation.host?.name}</p>
              <img src={accomodation.host?.picture} alt={`${accomodation.host?.name || 'Host'} picture`} className="accomodation__host-pic" />
            </div>
          </div>
        </div>
        <div className="accomodation__collapses">
          <Collapse title="Description" description={accomodation.description} />
          <Collapse title="Équipements" description={accomodation.equipments.map((item, index) => (
            <span key={index}>
              {index === accomodation.equipments.length - 1 ? item : <>{item}<br /></>}
            </span>
          ))} />
        </div>
      </section>
    </div>
  )
}

export default AccomodationDetail