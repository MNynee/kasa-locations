async function getAccomodations() {
    const response = await fetch('http://localhost:5173/src/data/logements.json')
    return await response.json()
}

export const accomodationsData = await getAccomodations()

export const getAccomodationById = (id) => {
    accomodationsData.find(accomodation => accomodation.id === id)
}