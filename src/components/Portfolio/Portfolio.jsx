import React from 'react'
import './portfolio.css'

const Portfolio = () => {
    return (
        <div>
            <section className="portfolio section" id="portfolio">
                <h2 className="section__title">Portfolio</h2>
                <span className="section__subtitle">Projets recents</span>

                <div className="portfolio__container container grid">


                    <div className="portfolio__content portfolio__popotte">
                        <div className="portfolio__data">
                            <h3 className="portfolio__title">La popotte de valou</h3>
                            <p className="portfolio__description">Site web réalisé pour le restaurant la popotte de valou situé sur Alès dans le gard(30)</p>
                            <a href="https://github.com/KevinMaze/la_popote_de_valou" className="button button__flex portfolio__button" target='_blank'>
                                Voir le code
                                <i className="bx bx-right-arrow-alt button__icon portfolio__button portfolio__button__icon"></i>
                            </a>
                        </div>
                    </div>

                    <div className="portfolio__content portfolio__parrot">
                        <div className="portfolio__data">
                            <h3 className="portfolio__title">Garage Vincent Parrot</h3>
                            <p className="portfolio__description">Projet réaliser dans le cadre de mon examen de développeur web et web mobile.</p>
                            <a href="https://github.com/KevinMaze/Garage-ECF-2023" className="button button__flex portfolio__button" target='_blank'>
                                Voir le code
                                <i className="bx bx-right-arrow-alt button__icon portfolio__button portfolio__button__icon"></i>
                            </a>
                        </div>
                    </div>

                    {/* <div className="portfolio__content">
                        <div className="portfolio__data">
                            <h3 className="portfolio__title">Portfolio Website</h3>
                            <p className="portfolio__description">This is a project that I made for my portfolio, it is a website that shows my skills and my most recent projects.</p>
                            <a href="#" className="button button__flex portfolio__button" target='_blank'>
                                Voir le code
                                <i className="bx bx-right-arrow-alt button__icon portfolio__button portfolio__button__icon"></i>
                            </a>
                        </div>
                    </div> */}
                </div>
            </section>
        </div>
    )
}

export default Portfolio