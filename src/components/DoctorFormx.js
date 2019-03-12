import React from 'react'
import './DoctorForm.css'
import {Link} from 'react-router-dom'
const DoctorFormx = ({handleInput, handleBoton, formulario}) => {

    return  (
           <div className="row">
               <div className="col-4">
                   <div className="row">
                       <div className="col-12">Nombres:</div>
                       <input className="offset-1 col-10" type="text" placeholder="Nombres" name="nombre" onChange={handleInput} value={formulario.nombre}  />
                   </div>
               </div>
               <div className="col-4">
                   <div className="row">
                       <div className="col-12">
                       Apellidos:
                       </div>
                       <input className="offset-1 col-10 "  type="text" placeholder="Apellidos" name="apellido" onChange={handleInput} value={formulario.apellido} />
                   </div>
               </div>
               <div className="col-4">
                   <div className="row">
                       <div className="col-12">
                           Telefono:
                       </div>
                       <input className="offset-1 col-10 " type="number" name="telefono" placeholder="Telefono" onChange={handleInput} value={formulario.telefono}/>
                   </div>
               </div>
               <div className="col-12 ">
                   <div className="row">
                       <button type="button" onClick={(ev) => {
                           ev.preventDefault()
                           handleBoton(formulario)
                       }} className="col-6 btn btn-primary boton_registrar">
                       Registrar Medico
                       </button>
                       <Link to="/" className="col-6">
                            <button type="button" className="col-12 btn btn-danger boton_registrar">
                                    Cancelar
                            </button> 
                       </Link>
                       </div>
               </div>
           </div>
   )
}

export default DoctorFormx
