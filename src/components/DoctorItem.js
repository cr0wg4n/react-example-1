import React from 'react'
import './DoctorItem.css';
const DoctorItem = ({doctor, deleteDoctor}) => (
    <div className="col-12">
        <div className="row">
            <div className="col-3">{doctor.nombre}</div>
            <div className="col-3">{doctor.apellido}</div>
            <div className="col-3">{doctor.telefono}</div>
            <button onClick={
                (ev)=>{
                    ev.preventDefault();
                    deleteDoctor(doctor.id);
                }} 
            className="col-3 btn btn-danger boton_eliminar">Eliminar</button>            
        </div>
    </div>
)

export default DoctorItem
