import React from 'react'
import logo from '../../assets/img/logo.svg'
import './styles.css'

function Header() {
    return (
        <>
            <header>
                <div className="dsmeta-logo-container">
                    <img src={logo} alt="DSmeta" />
                    <h1>Dsmeta</h1>
                    <p>Desenvolvido por
                        <a href="https://github.com/Custodio-dev29">@Custodio-dev29</a>
                    </p>
                </div>

            </header>
        </>
    )
}

export default Header




