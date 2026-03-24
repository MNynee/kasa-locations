import { accomodationsData } from '../../data/logements'
import Banner from '../../components/Banner'
import AccomodationCard from '../../components/Card'
import '../../main.css'

function Home() {
     const recentAccomodations = accomodationsData.slice(0, 6)
    
         return (
            <div className="page">
                <Banner />
                <section className="accomodations">
                    {recentAccomodations.map((accomodation) => (
                        <AccomodationCard key={accomodation.id} accomodation={accomodation} />
                    ))}
                </section>
            </div>
         )
}

export default Home