import React from "react";
import "./about.css"

function About(){
    return(
        <section className="about-container" id="about">
            <div className="about-content" >
                <h1><span>A</span>bout</h1>
                <p>Estudiante de Informatica en el Instituto Oficial Alvaro Contreras en la ciudad de Santa Rosa de Copán y actual pasante universitario de la carrera de Ingenieria en Sistemas en la Universidad Nacional Autonoma de Honduras, centro regional de occidente (CUROC).<br/><br/>
                Mis actuales habilidades de HTML, CSS, Javascript y React las he aprendido estudiando de forma autodidacta buscando documentacion y cursos en Internet. Mi mayor formacion en estos conocimientos ha sido gracias a Platzi y la ruta de desarrollo web, en la cual se enseña todo lo necesario para poder desempeñarse como un desarrollador Frontend.
                </p>
                <h3>Habilidades</h3>
                <div className="about-content_skills">
                    <div className="about-skills_html"></div>
                    <div className="about-skills_css"></div>
                    <div className="about-skills_js"></div>
                    <div className="about-skills_react"></div>
                </div>
            </div>
        </section>
    )
}

export { About }