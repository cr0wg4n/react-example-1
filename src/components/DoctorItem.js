import React from 'react'
import './DoctorItem.css';
import {Link} from 'react-router-dom';
const DoctorItem = ({doctor, deleteDoctor}) => (
    <div className="col-12">
        <div className="row">
            <div className="col-3">{doctor.nombre}</div>
            <div className="col-3">{doctor.apellido}</div>
            <div className="col-2">{doctor.telefono}</div>
            <Link to={"/editar/"+doctor.id} className="col-2">
                <button className="col-12 btn btn-warning boton_eliminar">Editar</button>
            </Link>
            <button onClick={
                (ev)=>{
                    ev.preventDefault();
                    deleteDoctor(doctor.id);
                }} 
            className="col-2 btn btn-danger boton_eliminar">Eliminar</button>            
        </div>
    </div>
)

export default DoctorItem
