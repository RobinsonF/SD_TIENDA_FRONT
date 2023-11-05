
function MyOrderCard({product}) {
    return (
        <>
            <li className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                    <img src={`http://localhost:8080/TiendaVirtualSB/images/${product.imagen}`} alt="Producto 1" className="w-16 h-16 object-cover rounded-full" />
                    <div className="ml-2">
                        <p className="font-bold">{product.nombre}</p>
                        <p className="text-gray-600">{product.descripcion}</p>
                    </div>
                </div>
                <p className="text-gray-600">${product.precio}</p>
            </li>
        </>
    )
}

export default MyOrderCard


