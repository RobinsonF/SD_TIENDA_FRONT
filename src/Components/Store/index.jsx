import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import CrearProducto from "../crear-producto";
import { Modal } from '../../Components/Modal';

function Store({ children }) {
    const context = useContext(ShoppingCartContext);

    return (
        <>
            <div className="bg-white">
                <div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
                            <div className="flex items-center w-full">
                                <h1 className="text-4xl font-bold tracking-tight text-gray-900">Productos</h1>
                                <div className="p-8">
                                    <div className="flex items-center">
                                        <input type="text" id="search" name="search" className="border border-gray-700 rounded-lg p-2 w-full focus:outline" placeholder="Buscar producto"
                                            value={context.search}
                                            onChange={(event) =>
                                                context.setSearch(event.target.value)
                                            }
                                        />
                                    </div>
                                </div>
                                <div>
                                    <button className="px-4 py-2 border rounded-lg hover:bg-blue-500 hover:text-white"
                                        onClick={() => {
                                            context.setOpenModalCrearProducto(true);
                                        }}
                                    >
                                        Crear
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div aria-labelledby="products-heading" className="pb-24 pt-6">
                            <label id="products-heading" className="sr-only">Products</label>
                            <div className="max-w-5xl mx-auto">
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {context.openModalCrearProducto && (
                <Modal>
                    <CrearProducto></CrearProducto>
                </Modal>
            )
            }
        </>
    )
}

export default Store