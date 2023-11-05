import React, { useState } from 'react';
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

const EditarProveedor = ({proveedor}) => {
  const context = useContext(ShoppingCartContext);
  const [newProveedor, setNewProveedor] = useState({
    nit_prov: proveedor.nit_prov,
    ciudad_prov: proveedor.ciudad_prov,
    direccion_prov: proveedor.direccion_prov,
    nombre_prov: proveedor.nombre_prov,
    telefono_prov: proveedor.telefono_prov,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/TiendaVirtualSB/proveedor/actualizarProveedor', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProveedor),
      });

      if (response.ok) {
        window.location.reload();
        console.log('Proveedor editado exitosamente');
      } else {
        console.error('Error al editar el proveedor');
      }
    } catch (error) {
      console.error('Error al editar el proveedor:', error);
    }
  };

  return (
    <div className="bg-white w-1/2 rounded-lg p-4 shadow-md">
      <label className="text-2xl text-black font-semibold">Editar proveedor</label>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-semibold" htmlFor="nit">
            Nit
          </label>
          <input
            type="text"
            disabled={true}
            id="nit"
            className="w-full text-black border border-gray-300 rounded px-3 py-2"
            value={newProveedor.nit_prov}
            onChange={(e) => setNewProveedor({ ...newProveedor, nit_prov: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-semibold" htmlFor="ciudad">
            Ciudad
          </label>
          <input
            type="text"
            id="ciudad"
            className="w-full text-black border border-gray-300 rounded px-3 py-2"
            value={newProveedor.ciudad_prov}
            onChange={(e) => setNewProveedor({ ...newProveedor, ciudad_prov: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-semibold" htmlFor="direccion">
            Dirección
          </label>
          <input
            type="text"
            id="direccion"
            className="w-full text-black border border-gray-300 rounded px-3 py-2"
            value={newProveedor.direccion_prov}
            onChange={(e) => setNewProveedor({ ...newProveedor, direccion_prov: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-semibold" htmlFor="nombre">
            Nombre
          </label>
          <input
            type="text"
            id="nombre"
            className="w-full text-black border border-gray-300 rounded px-3 py-2"
            value={newProveedor.nombre_prov}
            onChange={(e) => setNewProveedor({ ...newProveedor, nombre_prov: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-semibold" htmlFor="telefono">
            Teléfono
          </label>
          <input
            type="text"
            id="telefono"
            className="w-full text-black border border-gray-300 rounded px-3 py-2"
            value={newProveedor.telefono_prov}
            onChange={(e) => setNewProveedor({ ...newProveedor, telefono_prov: e.target.value })}
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600 transition duration-200"
          >
            Editar proveedor
          </button>
          <button
            type="button"
            className="bg-gray-300 text-gray-600 px-4 py-2 rounded hover:bg-gray-400 transition duration-200"
            onClick={() => {
              context.setOpenModalEditarProveedor(false);
            }}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditarProveedor;
