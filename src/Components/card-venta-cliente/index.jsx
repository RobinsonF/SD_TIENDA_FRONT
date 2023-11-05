import { Link } from "react-router-dom"
import { useContext, useState, useEffect } from "react";

function CardVentaCliente({ info }) {
    const infoArray = info.split(';');
    const [cliente, setCliente] = useState(null);
    useEffect(() => {
        fetch(`http://localhost:8080/TiendaVirtualSB/cliente/consultarClientes/${infoArray[0]}`)
            .then((response) => response.json())
            .then((data) => {
                setCliente(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [infoArray[0]]);
    return (
        <>
            <div className="bg-white border rounded-lg shadow-sm p-4">
                <h3 className="text-xl font-bold mb-2">Cliente {cliente?.nombre_cli}</h3>
                <p><strong>Cantidad productos:</strong> {infoArray[1]}</p>
                {/* <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4">
                    <Link key={index} to={`/my-orders/${index}`}>
                        Ver detalle
                    </Link>
                </button> */}
            </div>
        </>
    )
}

export default CardVentaCliente