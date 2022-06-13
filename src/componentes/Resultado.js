import React from 'react';


const Resultado = ({total, plazo, cantidad}) => (
        <div className="u-full-width resultado">
            <h2>Resumen</h2>
            <p>El monto solicitado es: ${cantidad}</p>
            <p>A pagar en: {plazo} meses.</p>
            <p>Total final a pagar: ${(total).toFixed(2)}</p>
            <p>En pagos mensuales de: ${ (total / plazo).toFixed(2) }</p>
        </div>
    );


export default Resultado;