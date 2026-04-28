import React from 'react'

const Info = () => {
    return (
        <div className='about__info grid'>
            <div className="about__box">
                <h3 className="about__title">Langages</h3>
                <div className="about__info__span">
                    <span className="about__subtitle">HTML / CSS</span>
                    <span className="about__subtitle">Javascript</span>
                    <span className="about__subtitle">PHP</span>
                </div>
            </div>
            <div className="about__box">
                <h3 className="about__title">Bibliothèques</h3>
                <div className="about__info__span">
                    <span className="about__subtitle">Bootstrap</span>
                    <span className="about__subtitle">React</span>
                </div>
            </div>
            <div className="about__box">
                <h3 className="about__title">Framework</h3>
                <div className="about__info__span">
                    <span className="about__subtitle">Next.js</span>
                    <span className="about__subtitle">Symfony</span>
                </div>
            </div>
            <div className="about__box">
                <h3 className="about__title">Compétences graphiques</h3>
                <div className="about__info__span">
                    <span className="about__subtitle">Photoshop</span>
                    <span className="about__subtitle">Adobe XD</span>
                    <span className="about__subtitle">Figma</span>
                    <span className="about__subtitle">Première Pro</span>
                </div>
            </div>
        </div>
    )
}

export default Info