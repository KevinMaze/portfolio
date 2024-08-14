import React from 'react'
import Header from '../Header/Header'
import './home.css'
import Social from './Social'
import Data from './Data'

const Home = () => {
    return (
        <div>
            < Header />

            <section className="home section" id="home">
                <div className="home__container container grid">
                    <div className="home__content grid">
                        <Social />

                        <div className="home__img"></div>

                        <Data />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home