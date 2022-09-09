import React from "react";
import "./proyectos.css"


function Proyectos(){
    const [posicion, setPosicion]=React.useState(1)
    const [cargado, setCargado]=React.useState(false)
    const [ carrouselContainer, setCarrouselContainer] = React.useState(null)
    const [ carrouselIzquierda, setCarrouselIzquierda] = React.useState(null)
    const [ carrouselDerecha, setCarrouselDerecha] = React.useState(null)
    const [ carrouselItems, setCarrouselItems ] = React.useState(null)

    function paginaCargada(){
        setCarrouselContainer(document.querySelector(".proyectos-carrousel_grande"))
        setCarrouselIzquierda(document.querySelector(".carrousel_flecha-izquierda"))
        setCarrouselDerecha(document.querySelector(".carrousel_flecha-derecha"))
        setCarrouselItems(document.querySelectorAll(".proyectos-carrousel_item"))

        setCargado(true)
    }

    function eventoIzquierdo(){
        if(posicion===1){
            carrouselContainer.style.transform = "translateX(20%)"
            carrouselItems[0].classList.remove("fade")
            carrouselItems[1].classList.add("fade")
            carrouselItems[2].classList.add("fade")
            setPosicion(0)
        }

        if(posicion===2){
            carrouselContainer.style.transform = "translateX(-16.4%)"
            carrouselItems[0].classList.add("fade")
            carrouselItems[1].classList.remove("fade")
            carrouselItems[2].classList.add("fade")
            setPosicion(1)
        }
    }


    function eventoDerecha(){
        if(posicion === 1){
            carrouselContainer.style.transform = "translateX(-53%)"   
            carrouselItems[0].classList.add("fade")
            carrouselItems[1].classList.add("fade")
            carrouselItems[2].classList.remove("fade")
            setPosicion(2)
        }

        if(posicion===0){
            carrouselContainer.style.transform = "translateX(-16.4%)"
            carrouselItems[0].classList.add("fade")
            carrouselItems[1].classList.remove("fade")
            carrouselItems[2].classList.add("fade")
            setPosicion(1)
        }        
    }


    React.useEffect(()=>{
        carrouselIzquierda?.addEventListener("click", eventoIzquierdo)
        carrouselDerecha?.addEventListener("click", eventoDerecha)

        return ()=>{
            carrouselIzquierda?.removeEventListener("click", eventoIzquierdo)
            carrouselDerecha?.removeEventListener("click", eventoDerecha)
        }
    },[cargado, posicion])
    
    window.addEventListener("load", paginaCargada)


    return(
        <section className="proyectos-container" id="proyectos">
            <div className="proyectos-content">
                <h1 className="proyectos-content_title"><span>P</span>royectos</h1>
                <div className="proyectos-content-carrousel">
                    <div className="proyectos-carrousel_grande">
                        <div className="proyectos-carrousel_item fade">
                            <div className="proyecto_view">
                                <div className="proyecto-view_name"></div>
                                <div className="proyecto-view_shadow"></div>
                            </div>
                        </div>
                        <div className="proyectos-carrousel_item">
                            <div className="proyecto_view">
                                <div className="proyecto-view_name"></div>
                                <div className="proyecto-view_shadow"></div>
                            </div>
                        </div>
                        <div className="proyectos-carrousel_item fade">
                            <div className="proyecto_view">
                                <div className="proyecto-view_name"></div>
                                <div className="proyecto-view_shadow"></div>
                            </div>
                        </div>
                    </div>                
                    <div className="carrousel_flecha-izquierda"></div>
                    <div className="carrousel_flecha-derecha"></div>
                </div>
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