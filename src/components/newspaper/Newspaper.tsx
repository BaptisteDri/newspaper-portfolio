import React from 'react'
import './newspaper.css'
import ToggleDarkMode from '../toggleDarkMode/ToggleDarkMode'

interface NewspaperProps {}
interface NewspaperState {}

export default class Newspaper extends React.Component<NewspaperProps, NewspaperState> {
    render() {
        return <div className="newspaper-container" id={window.localStorage.getItem('theme') ? window.localStorage.getItem('theme')?.toString() : 'light'}>
            <div className="paper">
                <header>
                    <h1>Baptiste Drillien</h1>
                    <nav>
                        <span>
                            Paris,&nbsp;
                            {
                                new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long' })
                            }
                            ,&nbsp;
                            {
                                new Date().toLocaleDateString('fr-FR', { year: 'numeric' })
                            }
                        </span>
                    </nav>
                </header>
                <main>
                    <article className="bio">
                        <img src="/profile.jpg" alt="Baptiste Drillien"/>
                        <div className="content">
                            <h2>Creative Developer</h2>
                            <div className="p-container">
                                <p>&nbsp;&nbsp;&nbsp;Baptiste Drillien est un « creative developer », à la rencontre entre le développeur front-end et le designer d'interface. Il utilise ses compétences en UI et en UX pour développer des applications innovantes avec des technologies modernes.</p>
                                <p>&nbsp;&nbsp;&nbsp;Pourquoi ne pas faire participer à la réflexion visuelle les développeurs-</p>
                                <p>dont la culture et la veille permettent une connaissance de ces nouveautés ?</p>
                                <p>Un développeur créatif est un atout sur les projets qui permet de faire le pont entre la création et la technique.</p>
                                <p>&nbsp;&nbsp;&nbsp;Baptiste Drillien est un « creative developer », à la rencontre entre le développeur front-end et le designer d'interface. Il utilise ses compétences en UI et en UX pour développer des applications innovantes avec des technologies modernes.</p>
                            </div>
                        </div>
                    </article>
                    <div className="vertical-separator bio-malt"></div>
                    <article className="malt">
                        <a  href="https://www.malt.fr/profile/baptistedrillien?q=baptiste%20drillien&searchid=5ef9195b73ce720007b62924" target="_blank"  rel="noopener noreferrer">
                            <h2>Freelancing</h2>
                            <p>Vous souhaitez travailler avec un « développeur créatif » en freelance ? Contactez Baptiste Drillien via Malt, « Simplicité et sécurité pour toutes vos missions ». </p>
                            <div className="fake-link">
                                Hire Me !
                            </div>
                        </a>
                    </article>
                    <div className="horizontal-separator"></div>
                    <ToggleDarkMode />
                    <div className="vertical-separator bio-malt"></div>
                    <article className="rooockets">
                        <a href="">
                            <div>
                                <h2>Rooockets, « I think fundamentally the future is vastly more exciting we're a spacefaring civilization. »</h2>
                                <div className="p-container">
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati consectetur sunt deleniti ullam doloribus, facere autem unde nihil libero pariatur magni rerum laborum, voluptas sapiente ipsum! In quibusdam temporibus officiis.</p>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure odit mollitia quae beatae autem blanditiis accusantium natus alias at quaerat, consequuntur tenetur hic voluptate magnam quod laudantium inventore fugit suscipit!</p>
                                </div>
                            </div>
                            
                            <img src="falcon9.jpg" alt=""/>
                        </a>
                    </article>
                    <div className="horizontal-separator"></div>
                    <article className="waffle">
                        
                    </article>
                    <div className="horizontal-separator"></div>
                </main>
            </div>
        </div>
    }
}