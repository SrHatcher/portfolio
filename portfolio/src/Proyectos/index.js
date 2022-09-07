import React from "react";
import "./proyectos.css"

function Proyectos(){
    return(
        <section className="proyectos-container" id="proyectos">
            <div className="proyectos-content">
                <h1 className="proyectos-content_title"><span>P</span>royectos</h1>
                <div className="proyectos-content_proyectos">
                    <div className="proyecto_view">
                        <div className="proyecto-view_name"></div>
                        <div className="proyecto-view_shadow"></div>
                    </div>
                    <div className="proyecto_view">
                        <div className="proyecto-view_name"></div>
                        <div className="proyecto-view_shadow"></div>
                    </div>
                    <div className="proyecto_view">
                        <div className="proyecto-view_name"></div>
                        <div className="proyecto-view_shadow"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export {Proyectos}