import React, { useState } from 'react';
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

const CrearProducto = () => {
    const context = useContext(ShoppingCartContext);
    const [producto, setProducto] = useState({
        nombre: '',
        descripcion: '',
        precio: 0,
        imagen: null,
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setProducto({
            ...producto,
            [name]: value,
        });
    };

    const handleImagenChange = (event) => {
        const imagen = event.target.files[0];
        setProducto({
            ...producto,
            imagen,
        });
    };

    const handleCrearProducto = () => {
        const formData = new FormData();
        formData.append('precio', producto.precio);
        formData.append('nombre', producto.nombre);
        formData.append('descripcion', producto.descripcion);
        formData.append('file', producto.imagen);

        fetch('http://localhost:8080/TiendaVirtualSB/producto/registrarProducto', {
            method: 'POST',
            body: formData,
        })
            .then((response) => {
                if (response.ok) {
                    return '';
                } else {
                    console.error('Error al crear el producto');
                    throw new Error('Error al crear el producto');
                }
            })
            .then((nuevoProducto) => {
                window.location.reload();
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div className="p-4 border rounded shadow-md bg-white w-1/2">
            <h2 className="text-2xl font-semibold text-black mb-4">Crear Producto</h2>
            <div className="mb-4">
                <label className="block text-black">Nombre:</label>
                <input
                    type="text"
                    name="nombre"
                    value={producto.nombre}
                    onChange={handleInputChange}
                    className="w-full border rounded p-2 text-black"
                />
            </div>
            <div className="mb-4">
                <label className="block text-black">Descripción:</label>
                <textarea
                    name="descripcion"
                    value={producto.descripcion}
                    onChange={handleInputChange}
                    className="w-full border rounded p-2 text-black"
                />
            </div>
            <div className="mb-4">
                <label className="block text-black">Precio:</label>
                <input
                    type="text"
                    name="precio"
                    value={producto.precio}
                    onChange={handleInputChange}
                    className="w-full border rounded p-2 text-black"
                />
            </div>
            <div className="mb-4">
                <label className="block text-black">Imagen:</label>
                <input
                    type="file"
                    name="imagen"
                    onChange={handleImagenChange}
                    className="w-full border rounded p-2"
                />
            </div>
            <div className='flex flex-row space-x-2 justify-end'>
                <button
                    onClick={handleCrearProducto}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Crear Producto
                </button>
                <button
                    className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                    onClick={() => {
                        context.setOpenModalCrearProducto(false);
                    }}>
                    Cancelar
                </button>
            </div>
        </div>
    );
};

export default CrearProducto;
