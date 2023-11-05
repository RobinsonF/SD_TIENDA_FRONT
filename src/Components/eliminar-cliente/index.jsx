import React, { useState } from 'react';
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

const ConfirmDeleteCliente = ({ cedula_cli }) => {
    const context = useContext(ShoppingCartContext);
    const handleEliminarCliente = () => {
        fetch(`http://localhost:8080/TiendaVirtualSB/cliente/eliminarCliente/${cedula_cli}`, {
            method: 'DELETE',
        })
            .then((response) => {
                if (response.ok) {
                    window.location.reload();
                } else {
                    console.error('Error al eliminar el cliente');
                }
            })
            .catch((error) => {
                console.error('Error al eliminar el cliente:', error);
            });
    };
    const handleCancel = () => {
        context.setOpenModalEliminarCliente(false);
    };

    const handleDelete = () => {
        handleEliminarCliente();
    };

    return (
        <div className="inline-block relative text-gray-700 w-1/4">
            <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-80">
                <div className="bg-white p-4 rounded shadow-lg text-center">
                    <p className="mb-4">¿Estás seguro de que deseas eliminar este registro?</p>
                    <div className='flex flex-row justify-end'>
                        <button
                            onClick={handleDelete}
                            className="px-4 py-2 mr-2 bg-red-500 text-white rounded hover:bg-red-600"
                        >
                            Sí
                        </button>
                        <button
                            onClick={handleCancel}
                            className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                        >
                            No
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmDeleteCliente;
