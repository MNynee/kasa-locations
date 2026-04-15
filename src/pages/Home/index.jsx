import React from 'react'
import { useEffect, useState } from 'react'
import Banner from '../../components/Banner'
import AccomodationCard from '../../components/Card'
import '../../main.css'

const Home = () => {
  const [recentAccomodations, setRecentAccomodations] = useState([])

    useEffect(() => {
        async function fetchAccomodations() {
            const response = await fetch('./data/logements.json')
            const data = await response.json()
            setRecentAccomodations(data.slice(0, 6))
        }
        fetchAccomodations()
    }, [])
        
         return (
            <div className="page">
                <Banner isHome />
                <section className="accomodations">
                    {recentAccomodations.map((accomodation) => (
                        <AccomodationCard key={accomodation.id} accomodation={accomodation} />
                    ))}
                </section>
            </div>
         )
}

export default Home