import React, { useState } from 'react'
import Header from '../Header/Header'
import './services.css'

const Services = () => {

    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <div>
            <Header />
            <section className="service section" id="services">
                <h2 className="section__title">Services</h2>
                <span className="section__subtitle">What i offer</span>

                <div className="service__container container grid">

                    <div className="service__content">
                        <div>
                            <i className="uil uil-web-grid service__icon"></i>
                            <h3 className="service__title">Product <br/> Designer</h3>
                        </div>

                        <span className="service__button" onClick={() => toggleTab(1)}>View more <i className="uil uil-arrow-right service__button-icon"></i></span>

                        <div className={toggleState === 1 ? "service__modal active__modal" : "service__modal"}>
                            <div className="service__modal-content" onClick={() => toggleTab(0)}><i className="uil uil-times service__modal-close"></i>
                            
                            <h3 className="service__modal-title">Product Designer</h3>
                            <p className="service__modal-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, qui.</p>

                            <ul className="service__modal-services grid">
                                <li className="service__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="service__modal-info">I develop the user interface</p>
                                </li>
                                <li className="service__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="service__modal-info">Web page development</p>
                                </li>
                                <li className="service__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="service__modal-info">I create ux element interaction</p>
                                </li>
                                <li className="service__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="service__modal-info">Design and mockups of products</p>
                                </li>
                            </ul>
                            </div>
                        </div>
                    </div>

                    <div className="service__content">
                        <div>
                            <i className="uil uil-arrow service__icon"></i>
                            <h3 className="service__title">UI/UX <br/> Designer</h3>
                        </div>

                        <span className="service__button" onClick={() => toggleTab(2)}>View more <i className="uil uil-arrow-right service__button-icon"></i></span>

                        <div className={toggleState === 2 ? "service__modal active__modal" : "service__modal"}>
                            <div className="service__modal-content" onClick={() => toggleTab(0)}><i className="uil uil-times service__modal-close"></i>
                            
                            <h3 className="service__modal-title">UI/UX Designer</h3>
                            <p className="service__modal-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, qui.</p>

                            <ul className="service__modal-services grid">
                                <li className="service__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="service__modal-info">I develop the user interface</p>
                                </li>
                                <li className="service__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="service__modal-info">Web page development</p>
                                </li>
                                <li className="service__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="service__modal-info">I create ux element interaction</p>
                                </li>
                                <li className="service__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="service__modal-info">Design and mockups of products</p>
                                </li>
                            </ul>
                            </div>
                        </div>
                    </div>

                    <div className="service__content">
                        <div>
                            <i className="uil uil-edit service__icon"></i>
                            <h3 className="service__title">Visual <br/> Designer</h3>
                        </div>

                        <span className="service__button" onClick={() => toggleTab(3)}>View more <i className="uil uil-arrow-right service__button-icon"></i></span>

                        <div className={toggleState === 3 ? "service__modal active__modal" : "service__modal"}>
                            <div className="service__modal-content" onClick={() => toggleTab(0)}><i className="uil uil-times service__modal-close"></i>
                            
                            <h3 className="service__modal-title">Visual Designer</h3>
                            <p className="service__modal-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, qui.</p>

                            <ul className="service__modal-services grid">
                                <li className="service__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="service__modal-info">I develop the user interface</p>
                                </li>
                                <li className="service__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="service__modal-info">Web page development</p>
                                </li>
                                <li className="service__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="service__modal-info">I create ux element interaction</p>
                                </li>
                                <li className="service__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="service__modal-info">Design and mockups of products</p>
                                </li>
                            </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Services