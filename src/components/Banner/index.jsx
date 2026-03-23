import '../../main.css'

function Banner() {
    const sectionClass = document.queryselector('.nav__link.active').className.includes('home') ? 
        'homepage' : 'about'

    return (
        <section className={`banner ${sectionClass}`}>
            {document.queryselector('.nav__link.active').className.includes('home') ? 
            (<h1 className="banner__text">Chez vous, partout et ailleurs</h1>) : ''}
        </section>
    )
}

export default Banner