import React from 'react'
import Header from '../Header/Header'

const Portfolio = () => {
    return (
        <div>
            <Header />
            <section className="portfolio section" id="portfolio">
                <h2 className="section__title">Portfolio</h2>
                <span className="section__subtitle">Most recent projects</span>

                <div className="portfolio__container container swiper-container">
                    <div className="swiper-wrapper">
                        <div className="portfolio__content swiper-slide">
                            <div className="portfolio__data">
                                <h3 className="portfolio__title">Portfolio Website</h3>
                                <p className="portfolio__description">This is a project that I made for my portfolio, it is a website that shows my skills and my most recent projects.</p>
                                <a href="#" className="button button--flex button--small portfolio__button">
                                    View Project
                                    <i className="bx bx-right-arrow-alt button__icon"></i>
                                </a>
                            </div>
                        </div>

                        <div className="portfolio__content swiper-slide">
                            <div className="portfolio__data">
                                <h3 className="portfolio__title">Portfolio Website</h3>
                                <p className="portfolio__description">This is a project that I made for my portfolio, it is a website that shows my skills and my most recent projects.</p>
                                <a href="#" className="button button--flex button--small portfolio__button">
                                    View Project
                                    <i className="bx bx-right-arrow-alt button__icon"></i>
                                </a>
                            </div>
                        </div>

                        <div className="portfolio__content swiper-slide">
                            <div className="portfolio__data">
                                <h3 className="portfolio__title">Portfolio Website</h3>
                                <p className="portfolio__description">This is a project that I made for my portfolio, it is a website that shows my skills and my most recent projects.</p>
                                <a href="#" className="button button--flex button--small portfolio__button">
                                    View Project
                                    <i className="bx bx-right-arrow-alt button__icon"></i>
                                </a>
                            </div>
                        </div>

                        <div className="portfolio__content swiper-slide">
                            <div className="portfolio__data">
                                <h3 className="portfolio__title">Portfolio Website</h3>
                                <p className="portfolio__description">This is a project that I made for my portfolio, it is a website that shows my skills and my most recent projects.</p>
                                <a href="#" className="button button--flex button--small portfolio__button"> 
                                    View Project
                                    <i className="bx bx-right-arrow-alt button__icon"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Portfolio