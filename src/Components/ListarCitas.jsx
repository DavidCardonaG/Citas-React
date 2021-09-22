import React from "react";
import { useSelector,useDispatch } from "react-redux";
import {BorrarCita} from '../Actions/ActionCitas'

const ListarCitas = () => {
  const { citas } = useSelector((state) => state.citas);
  console.log(citas);

  const dispatch = useDispatch();

  const handleDelete = (id) =>{
      dispatch(BorrarCita(id))
  }

  return (
    <div className="card mt-5">
      <div id="card2" className="card-body">
        <h2 id="title2" className="card-title text-center">AGENDA</h2>
        <div className="lista-citas">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Fecha</th>
                <th scope="col">Hora</th>
                <th scope="col">Sintoma</th>
                <th scope="col">Acción</th>
              </tr>
            </thead>
            <tbody>
              {citas.map((cita) => {
                return (
                  <tr key = {cita.id}>
                    <td>{cita.nombre}</td>
                    <td>{cita.fecha}</td>
                    <td>{cita.hora}</td>
                    <td>{cita.sintomas}</td>
                    <td>
                      <button className="btn btn-danger"
                      onClick={()=> handleDelete(cita.id)}
                      > &times;</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListarCitas;
