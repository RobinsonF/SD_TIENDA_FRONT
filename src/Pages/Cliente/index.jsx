import React, { useState, useEffect } from 'react';
import { Modal } from '../../Components/Modal';
import ClienteForm from '../../Components/guardar-cliente';
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import ConfirmDeleteCliente from '../../Components/eliminar-cliente';
import ClienteFormEdit from '../../Components/editar-cliente';

function Cliente() {
  const context = useContext(ShoppingCartContext);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [cedula_cli, setCedula_cli] = useState('');
  const [cliente_cli, setCliente_cli] = useState('');
  const [currentPage, setCurrentPage] = useState(0); // Página actual
  const [itemsPerPage] = useState(10); // Cantidad de elementos por página
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentClientes = context.clients.slice(startIndex, endIndex);
  const filteredData = currentClientes.filter((cliente) =>
    Object.values(cliente).some((value) =>
      value.toLowerCase().includes(search.toLowerCase())
    )
  );
  const fetchClients = async () => {
    try {
      const response = await axios.get('http://localhost:8080/TiendaVirtualSB/cliente/consultarClientes');
      context.setClients(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error al obtener los datos de la API:', error);
    }
  };
  useEffect(() => {
    fetchClients();
  }, []);
  return (
    <>
      <div className='m-4 mt-20 border rounded-lg'>
        <div className="w-full max-w-6xl mx-auto p-4">
          <div className="mb-4 flex justify-between items-center">
            <h2 className="text-3xl font-semibold">Lista de Clientes</h2>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
              onClick={() => {
                context.setOpenModalSaveCliente(true);
              }}
            >
              Crear
            </button>
          </div>
          <input
            type="text"
            placeholder="Buscar cliente..."
            className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="overflow-x-auto">
            {isLoading ? (
              <p className="text-gray-600 text-center">Cargando...</p>
            ) : (
              <div>
                <table className="w-full table-auto">
                  <thead>
                    <tr className="bg-blue-500 text-white">
                      <th className="px-4 py-2">Cédula</th>
                      <th className="px-4 py-2">Dirección</th>
                      <th className="px-4 py-2">Email</th>
                      <th className="px-4 py-2">Nombre</th>
                      <th className="px-4 py-2">Teléfono</th>
                      <th className="px-4 py-2">Acción</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredData.map((cliente, index) => (
                      <tr
                        key={index}
                        className={(index % 2 === 0 ? 'bg-gray-100' : 'bg-gray-200') + ' transition duration-200'}
                      >
                        <td className="px-4 py-2">{cliente.cedula_cli}</td>
                        <td className="px-4 py-2">{cliente.direccion_cli}</td>
                        <td className="px-4 py-2">{cliente.email_cli}</td>
                        <td className="px-4 py-2">{cliente.nombre_cli}</td>
                        <td className="px-4 py-2">{cliente.telefono_cli}</td>
                        <td className="px-4 py-2">
                          <div className='flex flex-col space-y-1'>
                            <button className='px-4 py-2 border border-gray-400 hover:bg-blue-500 hover:text-white rounded-lg'
                            onClick={() => {
                              setCliente_cli(cliente);
                              context.setOpenModalEditarCliente(true);
                            }}
                            >
                              Editar
                            </button>
                            <button
                              className='px-4 py-2 border border-gray-400 hover:bg-blue-500 hover:text-white rounded-lg'
                              onClick={() => {
                                setCedula_cli(cliente.cedula_cli);
                                context.setOpenModalEliminarCliente(true);
                              }}>
                              Eliminar
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="pagination-container mt-4 flex flex-row justify-center">
                  <ReactPaginate
                    previousLabel={'Anterior'}
                    nextLabel={'Siguiente'}
                    breakLabel={'...'}
                    pageCount={Math.ceil(context.clients.length / itemsPerPage)}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={({ selected }) => setCurrentPage(selected)}
                    activeClassName={'bg-blue-500 text-white'}
                    previousClassName={'border rounded-l p-2 cursor-pointer hover:bg-gray-200'}
                    nextClassName={'border rounded-r p-2 cursor-pointer hover:bg-gray-200'}
                    pageClassName={'border p-2 cursor-pointer hover:bg-gray-200'}
                    breakClassName={'border p-2'}
                  ></ReactPaginate>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {context.openModalSaveCliente && (
        <Modal>
          <ClienteForm>
          </ClienteForm>
        </Modal>
      )
      }
      {context.openModalEliminarCliente && (
        <Modal>
          <ConfirmDeleteCliente
          cedula_cli={cedula_cli}
          ></ConfirmDeleteCliente>  
        </Modal>
      )
      }
      {context.openModalEditarCliente && (
        <Modal>
          <ClienteFormEdit
          cliente={cliente_cli}
          ></ClienteFormEdit>  
        </Modal>
      )
      }
    </>
  );
}

export default Cliente