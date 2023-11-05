import React from 'react';
import CardVentaProducto from '../card-venta-producto';
import CardVentaCliente from '../card-venta-cliente';

const ReporteVentas = ({ tipo, ventas }) => {
    const renderView = () => {
        if (tipo === 'producto') {
            return (
                ventas.map((item, index) =>
                    <>
                        <div className='flex flex-col'>
                            <CardVentaProducto
                            key={index}
                            info={item}
                            index={index}>  
                            </CardVentaProducto>
                        </div>
                    </>
                )

            );
        } else if (tipo === 'cliente') {
            return (
                ventas.map((item, index) =>
                    <>
                        <div className='flex flex-col'>
                            <CardVentaCliente
                            key={index}
                            info={item}>  
                            </CardVentaCliente>
                        </div>
                    </>
                )
            );
        }
    }
    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    renderView()
                }
            </div>
        </>
    );
};
export default ReporteVentas;
