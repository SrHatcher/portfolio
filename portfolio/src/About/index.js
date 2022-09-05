import React from "react";
import "./about.css"

function About(){
    return(
        <section className="about-container">
            <React.Fragment>
                <div className="about-lateral1" />
                <div className="about-lateral2" />
                <div className="about-lateral3" />
                <div className="about-lateral4" />
            </React.Fragment>
            
            <div className="about-content">
                <div className="about-line"></div>
                <h1><span>A</span>bout</h1>
                <div className="about-bullets"></div>
            </div>
        </section>
    )
}

export { About }