import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

function Navbar() {
    const activeStyle = 'bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium';
    const context = useContext(ShoppingCartContext);
    return (
        <nav className="bg-gray-800 fixed z-10 w-full  top-0">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button type="button" className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                            <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                            <img className="block h-8 w-auto lg:hidden" src="src/assets/Images/logo.png" alt="Your Company" />
                            <img className="hidden h-8 w-auto lg:block" src="src/assets/Images/logo.png" alt="Your Company" />
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">

                                <a className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">
                                    <NavLink
                                        to={'/'}
                                        onClick={() => {
                                            context.setSearchByCategory();
                                        }}
                                        className={({ isActive }) =>
                                            isActive ? activeStyle : undefined
                                        }>
                                        Productos
                                    </NavLink>
                                </a>
                                <a className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">
                                    <NavLink
                                        to={'/client'}
                                        onClick={() => {
                                            context.setSearchByCategory('Clothes');
                                        }}
                                        className={({ isActive }) =>
                                            isActive ? activeStyle : undefined
                                        }
                                    >
                                        Clientes
                                    </NavLink>
                                </a>
                                <a className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">
                                    <NavLink
                                        to={'/supplier'}
                                        onClick={() => {
                                            context.setSearchByCategory('Electronics');
                                        }}
                                        className={({ isActive }) =>
                                            isActive ? activeStyle : undefined
                                        }>
                                        Proveedores
                                    </NavLink>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="ml-auto flex items-center">
                            <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6 mr-2">
                                <a className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">
                                    <NavLink
                                        to={'/my-orders'}
                                        className={({ isActive }) =>
                                            isActive ? activeStyle : undefined
                                        }>
                                        Ventas
                                    </NavLink>
                                </a>
                            </div>
                            <span className="h-6 w-px bg-gray-200" aria-hidden="true"></span>
                            <div className="ml-4 flow-root lg:ml-6">
                                <button className="group -m-2 flex items-center p-2"
                                    onClick={() => {
                                        context.setOpenModalShopping(true);
                                    }}
                                >
                                    <svg className="h-6 w-6 flex-shrink-0 text-gray-300 group-hover:text-gray-500" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                    </svg>
                                    <span className="ml-2 text-sm font-medium text-gray-300 group-hover:text-gray-500">{context.totalProducts}</span>
                                    <span className="sr-only">items in cart, view bag</span>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </nav>
    )
}

export default Navbar
