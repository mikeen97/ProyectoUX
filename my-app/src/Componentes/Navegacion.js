import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class RegistroNota extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">
                Libro de Notas
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                        <Link className="navbar-brand" to="/">Crear nota</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="navbar-brand" to="/listar">Listar notas</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }

}