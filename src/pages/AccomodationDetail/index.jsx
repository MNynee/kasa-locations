import React from 'react'
import { useEffect, useState } from 'react'
import Carousel from '../../components/Carousel'
import '../../main.css'

const AccomodationDetail = () => {
  const [accomodations, setAccomodations] = useState([])
  
      useEffect(() => {
          async function fetchAccomodations() {
              const response = await fetch('http://localhost:5173/src/data/logements.json')
              const data = await response.json()
              setAccomodations(data)
          }
          fetchAccomodations()
      }, [])

  return (
    <div>AccomodationDetail</div>
  )
}

export default AccomodationDetail