import React from "react";
import "./proyectos.css"

function Proyectos(){
    return(
        <section className="proyectos-container">
            <div className="proyectos-container_shadow"></div>
            <div className="proyectos-content_container">
                <div className="proyectos-content_background-circle1"></div>
                <div className="proyectos-content_background-circle2"></div>
                <div className="proyectos-content_background-circle3"></div>
                <div className="proyectos-content_background-circle4"></div>
                <div className="proyectos-content_background-circle5"></div>
                <div className="proyectos-content_background">
                    <div className="proyectos-content_jugo-universo"></div>
                    <h1 className="proyectos-content_title1">Proyectos</h1>
                    <h1 className="proyectos-content_title2">Realizados</h1>
                    <div className="proyectos-hechos-container">
                        <div className="proyectos-hechos-division1">
                            <div className="proyecto-view">
                                <div className="proyecto-view_division1">
                                        <div className="proyecto-view_buttons"></div>
                                        <div className="proyecto-view_buttons"></div>
                                        <div className="proyecto-view_buttons"></div>
                                </div>
                                <div className="proyecto-view_division2"></div>
                                <div className="proyecto-view_division3"></div>
                            </div>
                            <div className="proyecto-view"></div>
                            <div className="proyecto-view"></div>
                        </div>
                        <div className="proyectos-hechos-division2">
                            <div className="proyecto-view"></div>
                            <div className="proyecto-view"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export {Proyectos}