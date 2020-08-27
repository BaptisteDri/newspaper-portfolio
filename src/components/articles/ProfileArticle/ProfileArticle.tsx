import React from 'react'
import './profileArticle.css'

function ProfileArticle() {
    return <article id="profile">
        <img src="/profile.jpg" alt="Baptiste Drillien"/>
        <div>
            <h2>Creative Developer</h2>
            <div className="p-container">
                <div>
                    <p className="p-bott">&nbsp;&nbsp;&nbsp;Baptiste Drillien est un « creative developer », à la rencontre entre le développeur front-end et le designer d'interface. Il utilise ses compétences en UI et en UX pour développer des applications innovantes avec des technologies modernes.</p>
                    <p>&nbsp;&nbsp;&nbsp;Pourquoi ne pas faire participer à la réflexion visuelle les développeurs dont la culture et la veille</p>
                </div>
                <div>
                    <p className="p-bott">permettent de connaître les nouveautés ?</p>
                    <p>Un développeur créatif est un atout sur les projets. Il permet de faciliter le pont entre la création et la technique et de favoriser la mise en place d'interfaces performantes et réfléchies.</p>
                </div>
            </div>
        </div>
    </article>
}

export default ProfileArticle