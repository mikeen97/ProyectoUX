import React, { Component } from 'react'


export default class ListaNotas extends Component {

    state = {
        notes: []
    }

    componentDidMount() {
        var ListNotas = [];//inicio nueva lista
        var storageList = localStorage.getItem('ListNotas') //jalo la lista de la memoria 
        if (storageList == null) {// si la lista esta vacia 
            ListNotas = []
        } else {
            ListNotas = JSON.parse(storageList);//tomo los valores que tiene 
        }
        this.setState({notes: ListNotas})
    }


    render() {
        return (
            <div className="row">
                {
                    this.state.notes.map(note => (
                        <div className="col-md-4 p-2" key={note._id}>
                            <div className="card">
                                <div className="card-header d-flex justify-content-between">
                                    <h5>Etiqueta: {note.etiqueta}</h5>
                                </div>
                                <div className="card-body">
                                    <p>
                                       Contenido: {note.content}
                                    </p>
                                    <p>
                                        Fecha: {note.fecha}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}
