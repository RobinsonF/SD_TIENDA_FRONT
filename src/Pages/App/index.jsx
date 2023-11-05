import { BrowserRouter, useRoutes } from 'react-router-dom';
import { ShoppingCartProvider } from '../../Context';
import './App.css';
import Home from '../Home';
import MyAccount from '../MyAccount';
import MyOrder from '../MyOrder';
import MyOrders from '../MyOrders';
import NotFound from '../NotFound';
import Signin from '../Signin';
import Navbar from '../../Components/Navbar';
import Shopping from '../../Components/Shopping';
import Cliente from '../Cliente';
import Proveedor from '../Proveedores';

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/clothes', element: <Home /> },
    { path: '/electronics', element: <Home /> },
    { path: '/furnitures', element: <Home /> },
    { path: '/toys', element: <Home /> },
    { path: '/others', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/my-orders/last', element: <MyOrder /> },
    { path: '/my-orders/:id', element: <MyOrder /> },
    { path: '/sign-in', element: <Signin /> },
    { path: '/client', element: <Cliente /> },
    { path: '/supplier', element: <Proveedor /> },
    { path: '/*', element: <NotFound /> },
  ])

  return routes
}

function App() {
  return (
    <>
      <ShoppingCartProvider>
        <BrowserRouter>
          <AppRoutes />
          <Navbar />
          <Shopping>
          </Shopping>
        </BrowserRouter>
      </ShoppingCartProvider>
    </>
  )
}

export default App
