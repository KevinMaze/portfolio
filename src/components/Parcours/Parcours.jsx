import React from 'react'

const Parcours = () => {
    return (
        <section className="parcours section">
            <h2 className="section__title">Parcours</h2>
            <span className="section__subtitle">Mon parcours personnel</span>

            <div className="parcours__container container">
                <div className="parcours__tabs">

                    <div className="parcours__button parcours__active button--flex">
                        <i className="uil uil-graduation-cap parcours__icon"></i>Scolaire
                    </div>

                    <div className="parcours__button button--flex">
                        <i className="uil uil-briefcase-alt parcours__icon"></i>Experience
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Parcours