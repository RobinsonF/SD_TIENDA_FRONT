import React, { useState } from 'react';
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

const ClienteFormEdit = ({cliente}) => {
  const context = useContext(ShoppingCartContext);
  const [newClient, setNewClient] = useState({
    cedula_cli: cliente.cedula_cli,
    direccion_cli: cliente.direccion_cli,
    email_cli: cliente.email_cli,
    nombre_cli: cliente.nombre_cli,
    telefono_cli: cliente.telefono_cli,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/TiendaVirtualSB/cliente/actualizarCliente', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newClient),
      });

      if (response.ok) {
        window.location.reload();
        console.log('Cliente creado exitosamente');
      } else {
        console.error('Error al crear el cliente');
      }
    } catch (error) {
      console.error('Error al crear el cliente:', error);
    }
  };

  return (
    <div className="bg-white w-1/2 rounded-lg p-4 shadow-md">
      <label className="text-2xl text-black mb-4 font-semibold">Editar cliente</label>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-semibold" htmlFor="cedula_cli">
            Cédula
          </label>
          <input
            type="text"
            id="cedula_cli"
            className="w-full text-black border border-gray-300 rounded px-3 py-2"
            value={newClient.cedula_cli}
            onChange={(e) => setNewClient({ ...newClient, cedula_cli: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-semibold" htmlFor="direccion_cli">
            Dirección
          </label>
          <input
            type="text"
            id="direccion_cli"
            className="w-full text-black border border-gray-300 rounded px-3 py-2"
            value={newClient.direccion_cli}
            onChange={(e) => setNewClient({ ...newClient, direccion_cli: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-semibold" htmlFor="email_cli">
            Email
          </label>
          <input
            type="email"
            id="email_cli"
            className="w-full text-black border border-gray-300 rounded px-3 py-2"
            value={newClient.email_cli}
            onChange={(e) => setNewClient({ ...newClient, email_cli: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-semibold" htmlFor="nombre_cli">
            Nombre
          </label>
          <input
            type="text"
            id="nombre_cli"
            className="w-full text-black border border-gray-300 rounded px-3 py-2"
            value={newClient.nombre_cli}
            onChange={(e) => setNewClient({ ...newClient, nombre_cli: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-semibold" htmlFor="telefono_cli">
            Teléfono
          </label>
          <input
            type="text"
            id="telefono_cli"
            className="w-full text-black border border-gray-300 rounded px-3 py-2"
            value={newClient.telefono_cli}
            onChange={(e) => setNewClient({ ...newClient, telefono_cli: e.target.value })}
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600 transition duration-200"
          >
            Editar Cliente
          </button>
          <button
            type="button"
            className="bg-gray-300 text-gray-600 px-4 py-2 rounded hover:bg-gray-400 transition duration-200"
            onClick={() => {
              context.setOpenModalEditarCliente(false);
            }}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default ClienteFormEdit;
