import React from 'react'
import AgregarCita from '../Components/AgregarCita'
import ListarCitas from '../Components/ListarCitas'
import Store from '../Store/Store'

import {Provider} from 'react-redux'
 const AgendaApp = () => {
    return (
      <Provider store={Store}>
        <div className="container text-center">
        <header><h1 id="title">EPS SALUD TOTAL</h1></header>
        <div className="row mt-3">
          <div className="col-md-6">
            <AgregarCita/>
          </div>
          <div className="col-md-6">
            <ListarCitas/>
          </div>
        </div>
      </div>
      </Provider>
    )
}

export default AgendaApp;
