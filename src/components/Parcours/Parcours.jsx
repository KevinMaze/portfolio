import React, { useState } from 'react'
import './parcours.css'

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
                                    <i className="uil uil-calendar-alt"></i> 2023 - Mars 2024
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
                                <h3 className="parcours__title">Formation Dev web et web mobile</h3>
                                <span className="parcours__subtitle">Studi Ecole en ligne</span>
                                <div className="parcours__calender">
                                    <i className="uil uilcalendar-alt"></i> 2023 - Mars 2024
                                </div>
                            </div>
                        </div>

                        <div className="parcours__data">
                            <div>
                                <h3 className="parcours__title">Autre chose test</h3>
                                <span className="parcours__subtitle">Studi Ecole en ligne</span>
                                <div className="parcours__calender">
                                    <i className="uil uil-calendar-alt"></i> 2023 - Mars 2024
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
                                <h3 className="parcours__title">Oula ça fait beaucoup</h3>
                                <span className="parcours__subtitle">Studi Ecole en ligne</span>
                                <div className="parcours__calender">
                                    <i className="uil uilcalendar-alt"></i> 2023 - Mars 2024
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={toggleState === 2 ? "parcours__content parcours__content-active" : "parcours__content"}>
                        <div className="parcours__data">
                            <div>
                                <h3 className="parcours__title">Bidule truc machin</h3>
                                <span className="parcours__subtitle">Studi Ecole en ligne</span>
                                <div className="parcours__calender">
                                    <i className="uil uil-calendar-alt"></i> 2023 - Mars 2024
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
                                <h3 className="parcours__title">Wouha</h3>
                                <span className="parcours__subtitle">Studi Ecole en ligne</span>
                                <div className="parcours__calender">
                                    <i className="uil uilcalendar-alt"></i> 2023 - Mars 2024
                                </div>
                            </div>
                        </div>

                        <div className="parcours__data">
                            <div>
                                <h3 className="parcours__title">Autre chose test</h3>
                                <span className="parcours__subtitle">Studi Ecole en ligne</span>
                                <div className="parcours__calender">
                                    <i className="uil uil-calendar-alt"></i> 2023 - Mars 2024
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
                                <h3 className="parcours__title">Oula ça fait beaucoup</h3>
                                <span className="parcours__subtitle">Studi Ecole en ligne</span>
                                <div className="parcours__calender">
                                    <i className="uil uilcalendar-alt"></i> 2023 - Mars 2024
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                
            </div>
        </section>
    )
}

/* 1:59:48*/

export default Parcours