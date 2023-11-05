import { Link } from "react-router-dom"
import { useContext, useState, useEffect } from "react";

function CardVentaProducto({ info, index }) {
    const infoArray = info.split(';');
    console.log(infoArray)
    const [producto, setProducto] = useState(null);
    useEffect(() => {
        fetch(`http://localhost:8080/TiendaVirtualSB/producto/consultarProducto/${infoArray[0]}`)
            .then((response) => response.json())
            .then((data) => {
                setProducto(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [infoArray[0]]);
    return (
        <>
            <div className="bg-white border rounded-lg shadow-sm p-4">
                <h3 className="text-xl font-bold mb-2">Venta #{index + 1}</h3>
                <p><strong>Nombre producto:</strong> {producto?.nombre}</p>
                <p><strong>Cantidad:</strong> {infoArray[1]}</p>
                <p><strong>Total precio:</strong> ${producto?.precio * infoArray[1]}</p>
                {/* <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4">
                    <Link key={index} to={`/my-orders/${index}`}>
                        Ver detalle
                    </Link>
                </button> */}
            </div>
        </>
    )
}

export default CardVentaProducto