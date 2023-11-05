
import Card from '../../Components/Card';
import Store from '../../Components/Store';
import ProductDetail from '../../Components/ProductDetail';
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { Modal } from '../../Components/Modal';

function Home() {
  const context = useContext(ShoppingCartContext);
  const renderView = () => {
    if (context.filteredData?.length > 0) {
      return (
        context.filteredData?.map(item => (
          <Card key={item.codigoProducto} data={item} />
        ))
      )
    } else {
      return (
        <div>
          <p className="mt-4 text-red-500">No results found.</p>
        </div>
      )
    }
  }

  return (
    <>
      <Store>
        <div className='grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8'>
          {
            renderView()
          }
        </div>
      </Store>
      {context.openModal && (
        <Modal>
          <ProductDetail>
          </ProductDetail>
        </Modal>
      )
      }
    </>
  )
}

export default Home