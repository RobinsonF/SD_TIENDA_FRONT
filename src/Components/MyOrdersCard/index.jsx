import { Link } from "react-router-dom"

function MyOrdersCard({order, index}) {
    return (
        <>
            <div className="bg-white border rounded-lg shadow-sm p-4">
                <h3 className="text-xl font-bold mb-2">Order #{index + 1}</h3>
                <p><strong>Creation date:</strong> {order.date.toString()}</p>
                <p><strong>Total price:</strong> ${order.totalPrice}</p>
                <p><strong>Total products:</strong> {order.totalProducts}</p>
                <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4">
                  <Link key={index} to={`/my-orders/${index}`}>
                    Ver detalle
                  </Link>
                </button>
              </div>
        </>
    )
}

export default MyOrdersCard


