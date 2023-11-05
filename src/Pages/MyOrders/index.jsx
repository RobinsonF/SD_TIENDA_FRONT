import { useContext, useState, useEffect } from "react";
import { ShoppingCartContext } from "../../Context";
import MyOrdersCard from "../../Components/MyOrdersCard";
import ReporteVentas from "../../Components/reporte-ventas";

function MyOrders() {
  const context = useContext(ShoppingCartContext);
  const [activeTab, setActiveTab] = useState(0);
  const [ventasProducto, setVentasProducto] = useState([]);
  const [ventasCliente, setVentasCliente] = useState([]);
  const tabs = [
    {
      label: 'Por producto', tipo: 'producto', content: <ReporteVentas
        tipo={'producto'}
        ventas={ventasProducto}
      ></ReporteVentas>
    },
    {
      label: 'Por cliente', tipo: 'cliente', content: <ReporteVentas
        tipo={'cliente'}
        ventas={ventasCliente}
      ></ReporteVentas>
    },
  ];
  useEffect(() => {
    if (activeTab === 0) {
      fetch(`http://localhost:8080/TiendaVirtualSB/venta/consolidado/producto`)
        .then((response) => response.json())
        .then((apiData) => {
          setVentasProducto(apiData);
          console.log('producto', apiData);
        })
        .catch((error) => {
          console.error('Error al llamar a la API:', error);
        });
    } else if (activeTab === 1) {
      fetch(`http://localhost:8080/TiendaVirtualSB/venta/consolidado/cliente`)
        .then((response) => response.json())
        .then((apiData) => {
          setVentasCliente(apiData);
          console.log('cliente', apiData);
        })
        .catch((error) => {
          console.error('Error al llamar a la API:', error);
        });
    }

  }, [activeTab]);
  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  return (
    <>
      <div className="p-4 mt-20 max-w-7xl mx-auto">
        <div className="flex space-x-4">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => handleTabClick(index)}
              className={`px-4 py-2 rounded-lg ${index === activeTab ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="mt-4 p-4 bg-white">
          {tabs[activeTab].content}
        </div>
      </div>
      {/* <div className="p-4 mt-20 mx-auto max-w-7xl">
        <h2 className="text-2xl font-bold mb-4">Todas las ordenes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {
            context.orders.map((item, index) => (
              <MyOrdersCard
              key={index}
              order={item}
              index={index}
              >
              </MyOrdersCard>
            ))
          }
        </div>
      </div> */}
    </>
  )
}

export default MyOrders