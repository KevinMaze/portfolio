import React, { useState } from 'react'
import './services.css'

const Services = () => {

    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <div>
            <section className="service section" id="services">
                <h2 className="section__title">Services</h2>
                <span className="section__subtitle">Des prestations adaptées à vos besoins</span>

                <div className="service__container container grid">

                    <div className="service__content">
                        <div>
                            <i className="uil uil-web-grid service__icon"></i>
                            <h3 className="service__title">Web Design</h3>
                        </div>

                        <span className="service__button" onClick={() => toggleTab(1)}>Voir plus <i className="uil uil-arrow-right service__button-icon"></i></span>

                        <div className={toggleState === 1 ? "service__modal active__modal" : "service__modal"}>
                            <div className="service__modal-content" onClick={() => toggleTab(0)}><i className="uil uil-times service__modal-close"></i>
                            
                            <h3 className="service__modal-title">Web Design</h3>
                            <p className="service__modal-description">Le design de votre site est très important. Il véhicule votre identité, vos valeurs et vous démarque positivement de la concurrence.</p>

                            <ul className="service__modal-services grid">
                                <li className="service__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="service__modal-info">Branding afin de cibler au mieux vos besoins</p>
                                </li>
                                <li className="service__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="service__modal-info">Création ou utilisation de votre chartre graphique</p>
                                </li>
                                <li className="service__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="service__modal-info">Création de l'UI / UX design</p>
                                </li>
                                <li className="service__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="service__modal-info">Création de maquettes sur mesure</p>
                                </li>
                            </ul>
                            </div>
                        </div>
                    </div>

                    <div className="service__content">
                        <div>
                            <i className="uil uil-arrow service__icon"></i>
                            <h3 className="service__title">Développement de votre site</h3>
                        </div>

                        <span className="service__button" onClick={() => toggleTab(2)}>Voir plus <i className="uil uil-arrow-right service__button-icon"></i></span>

                        <div className={toggleState === 2 ? "service__modal active__modal" : "service__modal"}>
                            <div className="service__modal-content" onClick={() => toggleTab(0)}><i className="uil uil-times service__modal-close"></i>
                            
                            <h3 className="service__modal-title">Développement de votre site</h3>
                            <p className="service__modal-description">Pour la création ou la mise à jour de votre site, je vous accompagne dans votre projet. Le développement de votre site web est réalisé avec soin.</p>

                            <ul className="service__modal-services grid">
                                <li className="service__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="service__modal-info">Intégration suivant la maquette que vous avez validé.</p>
                                </li>
                                <li className="service__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="service__modal-info">Technologie adapté à votre demande. (HTML, React, Symfony...)</p>
                                </li>
                                <li className="service__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="service__modal-info">Fonctionnalités spécifiques que vous souhaitez intégrer.</p>
                                </li>
                                <li className="service__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="service__modal-info">Dynamisme des pages</p>
                                </li>
                                <li className="service__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="service__modal-info">Responsif design, pour s'adapter sur différents supports (téléphone, ordinateur...)</p>
                                </li>
                            </ul>
                            </div>
                        </div>
                    </div>

                    <div className="service__content">
                        <div>
                            <i className="uil uil-edit service__icon"></i>
                            <h3 className="service__title">Référencement</h3>
                        </div>

                        <span className="service__button" onClick={() => toggleTab(3)}>Voir plus <i className="uil uil-arrow-right service__button-icon"></i></span>

                        <div className={toggleState === 3 ? "service__modal active__modal" : "service__modal"}>
                            <div className="service__modal-content" onClick={() => toggleTab(0)}><i className="uil uil-times service__modal-close"></i>
                            
                            <h3 className="service__modal-title">Référencement</h3>
                            <p className="service__modal-description">Votre site est développé avec pour objectif d'apparaitre dans les premières pages des moteurs de recherche. Analysons puis optimisons ensemble votre contenu.</p>

                            <ul className="service__modal-services grid">
                                <li className="service__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="service__modal-info">Référencement naturel</p>
                                </li>
                                <li className="service__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="service__modal-info">Temps de chargement des pages optimisé</p>
                                </li>
                                <li className="service__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="service__modal-info">Indexation automatique des pages</p>
                                </li>
                                <li className="service__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="service__modal-info">Recherche des mots-clés les plus pertinants.</p>
                                </li>
                                <li className="service__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="service__modal-info">Intégration des différents réseaux sociaux.</p>
                                </li>
                            </ul>
                            </div>
                        </div>
                    </div>

                    <div className="service__content">
                        <div>
                            <i className="uil uil-wrench service__icon"></i>
                            <h3 className="service__title">Hébergement et maintenance</h3>
                        </div>

                        <span className="service__button" onClick={() => toggleTab(4)}>Voir plus <i className="uil uil-arrow-right service__button-icon"></i></span>

                        <div className={toggleState === 4 ? "service__modal active__modal" : "service__modal"}>
                            <div className="service__modal-content" onClick={() => toggleTab(0)}><i className="uil uil-times service__modal-close"></i>
                            
                            <h3 className="service__modal-title">Hébergement et maintenance</h3>
                            <p className="service__modal-description">Votre site sera hébergé sur  un serveur robuste, puissant, supportant la montée en puissance de votre trafic. Mis à jour régulièrement, votre site restera en bonne santé.</p>

                            <ul className="service__modal-services grid">
                                <li className="service__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="service__modal-info">Hébergement sur serveur dédié respectant la technologie choisie.</p>
                                </li>
                                <li className="service__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="service__modal-info">Création ou récupération de votre nom de domaine.</p>
                                </li>
                                <li className="service__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="service__modal-info">Mise à jour de votre site internet suivant vos besoins.</p>
                                </li>
                                <li className="service__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="service__modal-info">Petites modifications graphiques ou de contenu.</p>
                                </li>
                                <li className="service__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="service__modal-info">Optimisation des performances.</p>
                                </li>
                                <li className="service__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="service__modal-info">Sauvegarde en cas de piratage ou problème de serveur.</p>
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