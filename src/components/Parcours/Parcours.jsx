import React, { useState } from 'react'
import './parcours.css'
import Info from '../About/Info'

const Parcours = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (
        <section className="parcours section">
            <h2 className="section__title">Parcours</h2>
            <span className="section__subtitle">Mon parcours professionnel</span>
            <div className="parcours__container container">
                <div className="parcours__tabs">

                    <div className={toggleState === 1 ? "parcours__button parcours__active button--flex" : "parcours__button button--flex"} onClick={() => toggleTab(1)}>
                        <i className="uil uil-graduation-cap parcours__icon"></i>Scolaire
                    </div>

                    <div className={toggleState === 2 ? "parcours__button parcours__active button--flex" : "parcours__button button--flex"} onClick={() => toggleTab(2)}>
                        <i className="uil uil-briefcase-alt parcours__icon"></i>Experience
                    </div>
                </div>

                <div className="parcours__section">

                    <div className={toggleState === 1 ? "parcours__content parcours__content-active" : "parcours__content"}>
                        <div className="parcours__data">
                            <div>
                                <h3 className="parcours__title">Formation Dev Web et Web mobile</h3>
                                <span className="parcours__subtitle">Studi Ecole en ligne</span>
                                <div className="parcours__calender">
                                    <i className="uil uil-calendar-alt"></i> Janvier 2023 - Avril 2024 (Diplome obtenu le 9 avril 2024) 
                                </div>
                            </div>
                            <div>
                                <span className="parcours__rounder"></span>
                                <span className="parcours__line"></span>
                            </div>
                        </div>

                        <div className="parcours__data">
                            <div></div>
                            <div>
                                <span className="parcours__rounder"></span>
                                <span className="parcours__line"></span>
                            </div>
                            <div>
                                <h3 className="parcours__title">Baccalauréat Professionnel Hôtellerie Restauration</h3>
                                <span className="parcours__subtitle">CFA Avon (77)</span>
                                <div className="parcours__calender">
                                    <i className="uil uil-calendar-alt"></i> 2007 - 2009
                                </div>
                            </div>
                        </div>

                        <div className="parcours__data">
                            <div>
                                <h3 className="parcours__title">BEP Métier de la restauration</h3>
                                <span className="parcours__subtitle">Lycée Antonin Carême (77)</span>
                                <div className="parcours__calender">
                                    <i className="uil uil-calendar-alt"></i> 2005 - 2007
                                </div>
                            </div>
                            <div>
                                <span className="parcours__rounder"></span>
                                <span className="parcours__line"></span>
                            </div>
                        </div>

                    </div>

                    <div className={toggleState === 2 ? "parcours__content parcours__content-active" : "parcours__content"}>

                    <div className="parcours__data">
                            <div></div>
                            <div>
                                <span className="parcours__rounder"></span>
                                <span className="parcours__line"></span>
                            </div>
                            <div>
                                <h3 className="parcours__title">Développeur Web et Web mobile</h3>
                                <span className="parcours__subtitle">Création micro-entreprise</span>
                                <div className="parcours__calender">
                                    <i className="uil uil-calendar-alt"></i> Septembre 2024
                                </div>
                            </div>
                        </div>

                        <div className="parcours__data">
                            <div>
                                <h3 className="parcours__title">Cuisinier</h3>
                                <span className="parcours__subtitle">La Popotte de Valou (30)</span>
                                <div className="parcours__calender">
                                    <i className="uil uil-calendar-alt"></i> Depuis Septembre 2023
                                </div>
                            </div>
                            
                            <div>
                                <span className="parcours__rounder"></span>
                                <span className="parcours__line"></span>
                            </div>
                        </div>

                        <div className="parcours__data">
                            <div></div>
                            <div>
                                <span className="parcours__rounder"></span>
                                <span className="parcours__line"></span>
                            </div>
                            <div>
                                <h3 className="parcours__title">Directeur Général</h3>
                                <span className="parcours__subtitle">Création d'entreprise franchisé Le Kiosque à Pizzas (30)</span>
                                <div className="parcours__calender">
                                    <i className="uil uil-calendar-alt"></i> Septembre 2016 - Septembre 2023
                                </div>
                            </div>
                        </div>

                        <div className="parcours__data">
                            <div>
                                <h3 className="parcours__title">Chef de Parti</h3>
                                <span className="parcours__subtitle">Les 3 Brasseurs Sénart (77)</span>
                                <div className="parcours__calender">
                                    <i className="uil uil-calendar-alt"></i> 2012 - 2016
                                </div>
                            </div>
                            <div>
                                <span className="parcours__rounder"></span>
                                <span className="parcours__line"></span>
                            </div>
                        </div>

                        <div className="parcours__data">
                            <div></div>
                            <div>
                                <span className="parcours__rounder"></span>
                                <span className="parcours__line"></span>
                            </div>
                            <div>
                                <h3 className="parcours__title">Chef pâtissier</h3>
                                <span className="parcours__subtitle">Le Cozy Dammarie (77)</span>
                                <div className="parcours__calender">
                                    <i className="uil uil-calendar-alt"></i> 2011 - 2012
                                </div>
                            </div>
                        </div>

                        <div className="parcours__data">
                            <div>
                                <h3 className="parcours__title">Commis cuisine</h3>
                                <span className="parcours__subtitle">Les Pléiades * (77)</span>
                                <div className="parcours__calender">
                                    <i className="uil uil-calendar-alt"></i> 2011
                                </div>
                            </div>
                            <div>
                                <span className="parcours__rounder"></span>
                                <span className="parcours__line"></span>
                            </div>
                        </div>

                        <div className="parcours__data">
                            <div></div>
                            <div>
                                <span className="parcours__rounder"></span>
                                <span className="parcours__line"></span>
                            </div>
                            <div>
                                <h3 className="parcours__title">Commis cuisine</h3>
                                <span className="parcours__subtitle">Les 3 Brasseurs Sénart (77)</span>
                                <div className="parcours__calender">
                                    <i className="uil uil-calendar-alt"></i> 2009 - 2011
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}


export default Parcours