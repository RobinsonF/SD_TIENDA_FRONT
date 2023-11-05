import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

function ProductDetail() {
    const context = useContext(ShoppingCartContext);
    let productToShow = context.productToShow;
    console.log(productToShow)
    return (
        <div className="relative z-10" role="dialog" aria-modal="true">
            <div className="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block"></div>

            <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
                    <div className="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
                        <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8 rounded-lg">
                            <button type="button" className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
                                onClick={() => {
                                    context.setOpenModal(false);
                                }}
                            >
                                <span className="sr-only">Close</span>
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                                <div className="aspect-h-3 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
                                    <img src={`http://localhost:8080/TiendaVirtualSB/images/${productToShow.imagen}`} alt="Two each of gray, white, and black shirts arranged on table." className="object-cover object-center" />
                                </div>
                                <div className="sm:col-span-8 lg:col-span-7">
                                    <h2 className="text-3xl font-bold text-gray-900 sm:pr-12">{productToShow.nombre}</h2>

                                    <p className="text-xl text-gray-700 py-4">${productToShow.precio}</p>

                                    <p className="text-lg text-gray-700">{productToShow.descripcion}</p>

                                    {/* <button type="submit" className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                        Add to bag
                                    </button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail
