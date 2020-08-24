import React, { } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'


import Navegacion from './Componentes/Navegacion.js';
import RegistroNota from './Componentes/RegistroNota.js';
import ListaNotas from './Componentes/ListaNotas.js';

function App() {


  return (
    <Router>
      <Navegacion/>
      <div className="container p-4">
        <Route path="/" exact component={RegistroNota} />
        <Route path="/listar" component={ListaNotas} />
      </div>
    </Router>
  );

  
}

export default App;
