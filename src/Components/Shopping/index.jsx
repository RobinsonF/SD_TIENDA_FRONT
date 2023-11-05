import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../OderCard";

function Shopping() {
    const context = useContext(ShoppingCartContext);
    const [nit, setNit] = useState('');
    let products = context.products;
    let productsIds = [];
    context.products.map(item => {
        productsIds.push(item.codigoProducto)
    })
    const handleCheckout = () => {
        const orderToAdd = {
            productsIds: productsIds,
            cantidad: 1,
            nitCliente: nit
        }
        fetch('http://localhost:8080/TiendaVirtualSB/venta/registrarVentaMultiple', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
              },
            body: JSON.stringify(orderToAdd),
        })
            .then((response) => {
                if (response.ok) {
                    return '';
                } else {
                    console.error('Error al crear el venta');
                    throw new Error('Error al crear el venta');
                }
            })
            .then(() => {
                context.deleteProducts();
                window.location.reload();
            })
            .catch((error) => {
                console.error(error);
            });
    }

    return (
        <aside className={`${context.openModalShopping ? 'flex' : 'hidden'}`}>
            <div className="relative z-10" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">

                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">

                            <div className="pointer-events-auto w-screen max-w-md">
                                <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                                        <div className="flex items-start justify-between">
                                            <h2 className="text-lg font-medium text-gray-900" id="slide-over-title">Venta</h2>
                                            <div className="ml-3 flex h-7 items-center">
                                                <button type="button" className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                                                    onClick={() => {
                                                        context.setOpenModalShopping(false);
                                                    }}
                                                >
                                                    <span className="sr-only">Close panel</span>
                                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>

                                        <div className="mt-8">
                                            <div className="flow-root">
                                                <ul role="list" className="-my-6 divide-y divide-gray-200">
                                                    {
                                                        products?.map(item => (
                                                            <OrderCard
                                                                key={item.id}
                                                                data={item}
                                                            ></OrderCard>
                                                        ))
                                                    }

                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                                        <div className="flex items-center justify-between text-base font-medium text-gray-900 space-x-2">
                                            <div className="flex flex-row items-center space-x-1">
                                                <label>Nit cliente</label>
                                                <input
                                                    className="py-2 px-3 border rounded-lg"
                                                    value={nit}
                                                    type="text"
                                                    onChange={(e) => setNit(e.target.value)}
                                                />
                                            </div>
                                            <p>Subtotal</p>
                                            <p>${context.totalPriceProducts}</p>
                                        </div>
                                        <div className="mt-6">
                                            <a className="flex items-center cursor-pointer justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                                                onClick={() => {
                                                    handleCheckout();
                                                }}
                                            >
                                                Comprar</a>
                                        </div>
                                        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                                            <p>
                                                o
                                                <button type="button" className="ml-1 font-medium text-indigo-600 hover:text-indigo-500"
                                                    onClick={() => {
                                                        context.setOpenModalShopping(false);
                                                    }}
                                                >
                                                    seguir viendo
                                                    <span aria-hidden="true"> &rarr;</span>
                                                </button>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </aside>

    )
}

export default Shopping
