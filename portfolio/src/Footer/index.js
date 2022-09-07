import React from 'react'
import "./footer.css"

function Footer(){
    return(
        <footer className='footer-container'>
            <div className='footer-icons'>
                <div className='github-icon'></div>
                <div className='linkedin-icon'></div>
            </div>
            <div className='footer-text'>
                <p>Diseñado y desarrollado por Erick Maldonado</p>
            </div>
        </footer>
    )
}

export { Footer }