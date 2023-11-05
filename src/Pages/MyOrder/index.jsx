import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import MyOrderCard from "../../Components/MyOrderCard";
import { Link } from "react-router-dom";
import { ChevronLeftIcon } from '@heroicons/react/24/solid';

function MyOrder() {
  const context = useContext(ShoppingCartContext);
  const currentPath = window.location.pathname;
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1);
  if (index === 'last') index = context.orders?.length - 1;
  return (
    <>
      <div className="bg-gray-100 p-8 mt-20">
        <div className="flex items-center justify-center relative w-80 mb-6">
          <Link to='/my-orders' className='absolute left-0'>
            <ChevronLeftIcon className='h-6 w-6 text-black cursor-pointer' />
          </Link>
          <h2 className="text-2xl font-bold">Order details</h2>
        </div>
        <div className="bg-white rounded shadow-sm p-4 mb-4">
          <h3 className="text-xl font-bold mb-2">Order information</h3>
          <p><strong>Order:</strong> #{context.orders.indexOf(context.orders?.[index]) + 1}</p>
          <p><strong>Creation date:</strong> {context.orders?.[index]?.date.toString()}</p>
        </div>

        <div className="bg-white rounded shadow-sm p-4">
          <h3 className="text-xl font-bold mb-2">Products</h3>
          <ul>
            {
              context.orders?.[index]?.products.map(item => (
                <MyOrderCard
                  key={item.id}
                  product={item}
                ></MyOrderCard>
              ))
            }
          </ul>
        </div>
      </div>
    </>
  )
}

export default MyOrder