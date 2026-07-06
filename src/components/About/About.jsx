import './about.css'
import Info from './Info'
import Parcours from '../Parcours/Parcours'
import Skills from './Skills'


const About = () => {
    return (
        <div>
            <section className='about section' id='about'>
                <h2 className="section__title"> Présentation </h2>
                <span className="section__subtitle">Introduction</span>

                <div className="about__container container grid">
                    <img src="/assets/KEVIN-72.jpg" alt="" className="about__img" />

                    <div className="about__data">
                        <p className="about__description">Dans un monde où le numérique prend de plus en plus de place, un site internet n'est pas négligeable. Visibilité, référencement, publicité, amélioration d'image, communication au plus près du client. Un site internet est un formidable outil pour se faire connaitre. </p>
                        <p className="about__description">Fort de mes 15 années d'expérience dans la restauration, une passion pour le monde numérique et un diplôme obtenu en développement Web, je souhaite amener mon expertise afin de vous apporter de la visibilité et renforcer votre entreprise.</p>

                        <Skills />
                    </div>
                </div>

            </section>
            <Parcours />
            <div className='section__div__info'>
                <div className='div__info container'><Info />
                </div>
            </div>
        </div>
    )
}

export default About
