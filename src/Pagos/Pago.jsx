import React from 'react';
import { unstable_useViewTransitionState } from 'react-router-dom';

export const Pago = () => {
    return (

        <div>
            <h1>Boletos a la venta</h1>
            <div>
                <div>
                    <h2>Boleto 1</h2>
                    <p>Descripcion del boleto 1</p>
                    <button>Comprar</button>
                </div>
                <div>
                    <h2>Boleto 2</h2>
                    <p>Descripcion del boleto 2</p>
                    <button>Comprar</button>
                </div>
                <div>
                    <h2>Boleto 3</h2>
                    <p>Descripcion del boleto 3</p>
                    <button>Comprar</button>
                </div>
            </div>
        </div>

    
    )
}

export default Pago;
