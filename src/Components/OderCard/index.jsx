import { useContext } from "react";
import { ShoppingCartContext } from "../../Context"

function OrderCard(product) {
    const context = useContext(ShoppingCartContext);
    return (
        <div>
            <li className="flex py-6">
                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <img src={`http://localhost:8080/TiendaVirtualSB/images/${product.data.imagen}`} alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." className="h-full w-full object-cover object-center" />
                </div>
                <div className="ml-4 flex flex-1 flex-col">
                    <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>
                                <a href="#">{product.data.nombre}</a>
                            </h3>
                            <p className="ml-4">${product.data.precio}</p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">{product.data.descripcion}</p>
                    </div>
                    <div className="flex flex-1 items-end justify-between text-sm">
                        <div className="flex">
                            <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500"
                            onClick={() => {
                                context.deleteProduct(product.data)
                            }}
                            >Remove</button>
                        </div>
                    </div>
                </div>
            </li>
        </div>
    )
}

export default OrderCard
