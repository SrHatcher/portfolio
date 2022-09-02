import React from "react";
import "./proyectos.css"

function Proyectos(){
    return(
        <section className="proyectos-container">
            <div className="proyectos-content_shadow">
                <div className="proyectos-content">
                    <React.Fragment>
                        <div className="proyectos-content_background-circle1"></div>
                        <div className="proyectos-content_background-circle2"></div>
                        <div className="proyectos-content_background-circle3"></div>
                        <div className="proyectos-content_background-circle4"></div>
                        <div className="proyectos-content_background-circle5"></div>
                    </React.Fragment>
                    <div className="proyectos-content_background">
                        <h1 className="proyectos-content_title1">Proyectos</h1>
                        <h1 className="proyectos-content_title2">Realizados</h1>
                        <div className="proyectos-hechos-container">
                            <div className="proyectos-hechos-division1">
                                <div className="proyecto-view">
                                    <div className="proyecto-view_division1">
                                            <div className="proyecto-view_buttons"></div>
                                            <div className="proyecto-view_buttons"></div>
                                            <div className="proyecto-view_buttons">x</div>
                                    </div>
                                    <div className="proyecto-view_division2"></div>
                                    <div className="proyecto-view_division3">
                                        <p>TO-DO Machine</p>
                                    </div>
                                </div>
                                <div className="proyecto-view">
                                <div className="proyecto-view_division1">
                                            <div className="proyecto-view_buttons"></div>
                                            <div className="proyecto-view_buttons"></div>
                                            <div className="proyecto-view_buttons">x</div>
                                    </div>
                                    <div className="proyecto-view_division2"></div>
                                    <div className="proyecto-view_division3">
                                        <p>Tienda de Instrumentos</p>
                                    </div>
                                </div>
                                <div className="proyecto-view">
                                <div className="proyecto-view_division1">
                                            <div className="proyecto-view_buttons"></div>
                                            <div className="proyecto-view_buttons"></div>
                                            <div className="proyecto-view_buttons">x</div>
                                    </div>
                                    <div className="proyecto-view_division2"></div>
                                    <div className="proyecto-view_division3">
                                        <p>Tienda de Videojuegos</p>
                                    </div>
                                </div>
                            </div>
                            <div className="proyectos-hechos-division2">
                                <div className="proyecto-view">
                                <div className="proyecto-view_division1">
                                            <div className="proyecto-view_buttons"></div>
                                            <div className="proyecto-view_buttons"></div>
                                            <div className="proyecto-view_buttons">x</div>
                                    </div>
                                    <div className="proyecto-view_division2"></div>
                                    <div className="proyecto-view_division3">
                                        <p>Tienda de Ropa</p>
                                    </div>
                                </div>
                                <div className="proyecto-view">
                                <div className="proyecto-view_division1">
                                            <div className="proyecto-view_buttons"></div>
                                            <div className="proyecto-view_buttons"></div>
                                            <div className="proyecto-view_buttons">x</div>
                                    </div>
                                    <div className="proyecto-view_division2"></div>
                                    <div className="proyecto-view_division3">
                                        <p>Farmacia en Linea</p>
                                    </div>
                                </div>
                            </div>
                            <div className="proyectos-content_jugo-universo"></div>
                            <div className="proyectos-content_letras-jp"></div>
                            <div className="proyectos-content_letras-jp2"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="proyectos-footer">
                <div className="proyectos-footer_background2"></div>
                <div className="proyectos-footer_background"></div>
            </div>
        </section>
    )
}

export {Proyectos}