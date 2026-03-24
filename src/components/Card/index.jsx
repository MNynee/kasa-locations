import React from 'react'
import { Link } from 'react-router-dom'
import '../../main.css'

const AccomodationCard = ({ accomodation }) => {
  return (
        <Link to={`/accomodations/${accomodation.id}`}>
            <article className='accomodations__card'>
                <img src={accomodation.cover} alt={`${accomodation.title} cover`} className="card__cover" />
                <h3 className="card__title">{accomodation.title}</h3>
            </article>
        </Link>
    )
}

export default AccomodationCard