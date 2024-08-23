import React from 'react'
import './portfolio.css'

const Portfolio = () => {
    return (
        <div>
            <section className="portfolio section" id="portfolio">
                <h2 className="section__title">Portfolio</h2>
                <span className="section__subtitle">Projets recents</span>

                <div className="portfolio__container container grid">

                    <div className="portfolio__content">
                        <div className="portfolio__data">
                            <h3 className="portfolio__title">Garage Vincent Parrot</h3>
                            <p className="portfolio__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae optio asperiores magnam animi minus ut dolore, earum quod veritatis modi, minima hic? Unde voluptatem quas consectetur, corporis id et eius?</p>
                            <a href="https://github.com/KevinMaze/Garage-ECF-2023" className="button button__flex portfolio__button" target='_blank'>
                                Voir le code
                                <i className="bx bx-right-arrow-alt button__icon portfolio__button portfolio__button__icon"></i>
                            </a>
                        </div>
                    </div>

                    <div className="portfolio__content">
                        <div className="portfolio__data">
                            <h3 className="portfolio__title">Portfolio Website</h3>
                            <p className="portfolio__description">This is a project that I made for my portfolio, it is a website that shows my skills and my most recent projects.</p>
                            <a href="#" className="button button__flex portfolio__button">
                                Voir le code
                                <i className="bx bx-right-arrow-alt button__icon portfolio__button portfolio__button__icon"></i>
                            </a>
                        </div>
                    </div>

                    <div className="portfolio__content">
                        <div className="portfolio__data">
                            <h3 className="portfolio__title">Portfolio Website</h3>
                            <p className="portfolio__description">This is a project that I made for my portfolio, it is a website that shows my skills and my most recent projects.</p>
                            <a href="#" className="button button__flex portfolio__button">
                                Voir le code
                                <i className="bx bx-right-arrow-alt button__icon portfolio__button portfolio__button__icon"></i>
                            </a>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Portfolio