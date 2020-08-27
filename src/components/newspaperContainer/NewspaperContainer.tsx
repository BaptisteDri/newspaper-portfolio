import React from 'react'
import './newspaperContainer.css'

import ProfileArticle from '../articles/ProfileArticle/ProfileArticle'
import HireMeSection from '../articles/hireMeSection/HireMeSection'
import ToggleDarkMode from '../toggleDarkMode/ToggleDarkMode'

interface NewspaperContainerProps {}
interface NewspaperContainerState {}

export default class NewspaperContainer extends React.Component<NewspaperContainerProps, NewspaperContainerState> {
    render() {
        return <main className="newspaper-container">
            <div className="newspaper-wrapper">
                <header>
                    <h1>Baptiste Drillien</h1>
                    <nav>
                        <span>
                            Paris,
                            &nbsp;
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
                <div className="row">
                    <ProfileArticle />
                    <div className="v-sep"></div>
                    <HireMeSection />
                    <div className="v-sep"></div>
                    <ToggleDarkMode />
                </div>


                {/*
                <div className="h-sep"></div>

                <RooocketsArticle />
                <div className="v-sep"></div>
                <GotArticle />
                <div className="h-sep"></div>
                <AllfitArticle />

                <div className="h-sep"></div>
                            
                <WaffleArticle />
                */}
            </div>
        </main>
    }
}