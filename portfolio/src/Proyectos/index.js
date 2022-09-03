import React from "react";
import "./proyectos.css"

function Proyectos(){
    return(
        <React.Fragment>
            <section className="proyectos-container">
                <div className="proyectos-content_cuadricula">
                    <h1 className="proyectos-content_title">PROYECTOS REALIZADOS</h1>
                    <div className="proyectos-title_underline"></div>
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
                        <div className="proyectos-content_letras-jp"></div>
                        <div className="proyectos-content_letras-jp2"></div>
                    </div>
                    <div className="proyectos-content_half-heart"></div>
                    <div className="proyectos-content_half-skull"></div>
                    <div className="proyectos-content_tears"></div>
                </div>
                <div className="proyectos_left-simbols"></div>
                <div className="proyectos_right-simbols"></div>
            </section>
            <div className="proyectos-footer">
                <div className="proyectos-footer_background2"></div>
                <div className="proyectos-footer_background"></div>
            </div>
        </React.Fragment>
    )
}

export {Proyectos}