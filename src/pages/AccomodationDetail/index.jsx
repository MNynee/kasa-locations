import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
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

  if (!accomodation) {
    return <div>Loading...</div>
  }

  const ratingValue = Number(accomodation.rating) || 0
  const maxStars = 5
  const stars = Array.from({ length: maxStars }, (_, index) => index + 1)

  return (
    <div className='page'>
      <Carousel accomodation={accomodation} />
      <section className="accomodation">
        <div className='accomodation__details'>
          <h1 className="accomodation__title">{accomodation.title}</h1>
          <p className="accomodation__location">{accomodation.location}</p>
          <div className='accomodation__tags'>
            {(accomodation.tags || []).map((tag, index) => (
              <span key={`tag-${index}`} className="accomodation__tag">{tag}</span>
            ))}
          </div>
        </div>
        <div className="accomodation__rating-host">
          <div className="accomodation__rating">
            {stars.map((star) => (
              <span
                key={star}
                className={`accomodation__star ${star <= ratingValue ? 'accomodation__star--active' : 'accomodation__star--inactive'}`}
                aria-label={star <= ratingValue ? 'Filled star' : 'Empty star'}
              >
                ★
              </span>
            ))}
          </div>
          <div className="accomodation__host">
            <p className="accomodation__host-name">{accomodation.host?.name}</p>
            <img src={accomodation.host?.picture} alt={`${accomodation.host?.name || 'Host'} picture`} className="accomodation__host-pic" />
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