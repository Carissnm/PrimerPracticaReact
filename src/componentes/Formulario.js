import React, { useState, Fragment } from 'react';
import { calcularTotal } from '../helpers';


const Formulario = (props) => {

    const {cantidad, guardarCantidad, plazo, guardarPlazo, guardarTotal, guardarCargando} = props;
    
    //Definir State
    const [error, guardarError] = useState(false);
    
    const calcularPrestamo = e => {
        e.preventDefault();
        
        //validar
        if( cantidad === 0 || plazo === '') {
            guardarError(true);
            return;
        }
        

        //eliminar error previo
        guardarError(false);

        //habilitar spinner
        guardarCargando(true);

        setTimeout( () => {
            //realizar la cotización
            const total = calcularTotal(cantidad, plazo);
            //una vez calculado, guardarTotal
            guardarTotal(total);

            //deshabilitar spinner
            guardarCargando(false)
        }, 3000)

        //realizar la cotización
        const total = calcularTotal(cantidad, plazo);

        guardarTotal(total);

    }

    return ( 
        <Fragment>
            <form onSubmit={calcularPrestamo}>
            <div className="row">
                <div>
                    <label>Cantidad Prestamo</label>
                    <input 
                        className="u-full-width" 
                        type="number" 
                        placeholder="Ejemplo: 3000" 
                        onChange={ e => guardarCantidad(Number(e.target.value)) }
                    />
                </div>
                <div>
                    <label>Plazo para Pagar</label>
                    <select 
                        className="u-full-width"
                        onChange={ e => guardarPlazo(Number(e.target.value))}
                    >
                        <option value="">Seleccionar</option>
                        <option value="3">3 meses</option>
                        <option value="6">6 meses</option>
                        <option value="12">12 meses</option>
                        <option value="24">24 meses</option>
                    </select>
                </div>
                <div>
                    <input 
                        type="submit" 
                        value="Calcular" 
                        className="boton u-full-width"
                    />
                </div>
            </div>
        </form>

        { (error) ? <p className="error">Todos los campos son obligatorios</p> : null}
        

        </Fragment>
        
    );
};

export default Formulario;