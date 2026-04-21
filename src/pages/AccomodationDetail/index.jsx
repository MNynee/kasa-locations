import { useEffect, useState } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import Collapse from '../../components/Collapse'
import Carousel from '../../components/Carousel'
import fullStar from '../../assets/full-star.svg'
import emptyStar from '../../assets/empty-star.svg'

const AccomodationDetail = () => {
  const [accomodation, setAccomodation] = useState({})
  const { id } = useParams()

  useEffect(() => {
    async function fetchAccomodation() {
      const response = await fetch('/data/logements.json')
      const data = await response.json()
      const foundAccomodation = data.find(accomodation => accomodation.id === id)
      setAccomodation(foundAccomodation)
    }
    fetchAccomodation()
  }, [id])

  if (!accomodation) {
    return <Navigate to="/404" />
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
                star <= ratingValue ? (<img key={`star-${index}`} src={fullStar} alt='filled star' className='accomodation__star active'/>) : (<img key={`star-${index}`} src={emptyStar} alt='empty star' className='accomodation__star inactive'/>)
              ))}
            </div>
            <div className="accomodation__host">
              <p className="accomodation__host-name">{accomodation.host?.name || 'Host'}</p>
              <img src={accomodation.host?.picture} alt={`${accomodation.host?.name || 'Host'} picture`} className="accomodation__host-pic" />
            </div>
          </div>
        </div>
        <div className="accomodation__collapses">
          <Collapse title="Description" description={accomodation.description} />
          {accomodation.equipments && (
            <Collapse title="Équipements" description={accomodation.equipments.map((item, index) => (
              <span key={index}>
                {index === accomodation.equipments.length - 1 ? item : <>{item}<br /></>}
              </span>
            ))} />
          )}
        </div>
      </section>
    </div>
  )
}

export default AccomodationDetail