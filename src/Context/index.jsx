import { createContext, useState, useEffect } from "react";
import { useLocalStorage, useLocalStorageOrder } from "./UseLocalStorage";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {

    const [count, setCount] = useState(0);
    const [openModal, setOpenModal] = useState(false);
    const [openModalCrearProducto, setOpenModalCrearProducto] = useState(false);
    const [openModalCrearProveedor, setOpenModalCrearProveedor] = useState(false);
    const [openModalEditarProveedor, setOpenModalEditarProveedor] = useState(false);
    const [openModalEliminarCliente, setOpenModalEliminarCliente] = useState(false);
    const [openModalEliminarProveedor, setOpenModalEliminarProveedor] = useState(false);
    const [openModalEditarCliente, setOpenModalEditarCliente] = useState(false);
    const [openModalSaveCliente, setOpenModalSaveCliente] = useState(false);
    const [openModalShopping, setOpenModalShopping] = useState(false);
    const [productToShow, setProductToShow] = useState({});
    const [clients, setClients] = useState([]);
    const [proveedores, setProveedores] = useState([]);
    const [search, setSearch] = useState('');
    const [items, setItems] = useState([]);

    const {
        item,
        saveItems,
    } = useLocalStorage('Shopping', []);

    const totalProducts = item.length;

    const products = item;

    const totalPriceProducts = item.reduce((sum, item) => sum + item.precio, 0);
    const filteredData = items.filter((product) =>
        Object.values(product).some((value) =>
            value.toString().toLowerCase().includes(search.toLowerCase())
        )
    );

    const addProduct = (product) => {
        const newProducts = [...item];
        newProducts.push(product)
        saveItems(newProducts);
    }

    const deleteProduct = (product) => {
        const newProducts = [...item];
        const productIndex = newProducts.indexOf(product);
        newProducts.splice(newProducts[productIndex], 1);
        saveItems(newProducts);
    }

    const deleteProducts = () => {
        const newProducts = [];
        saveItems(newProducts);
    }

    const {
        order,
        saveOrders,
    } = useLocalStorageOrder('Orders', []);

    const orders = order;

    const addOrder = (orderA) => {
        const newOrder = [...order];
        newOrder.push(orderA)
        saveOrders(newOrder);
    }

    const deleteOrder = (orderA) => {
        const newOrder = [...order];
        const orderIndex = newOrder.indexOf(orderA);
        newOrder.splice(newOrder[orderIndex], 1);
        saveOrders(newOrder);
    }

    useEffect(() => {
        fetch('http://localhost:8080/TiendaVirtualSB/producto/consultarProducto')
            .then(response => response.json())
            .then(data => setItems(data))
    }, []);

    return (
        <ShoppingCartContext.Provider value={
            {
                count,
                setCount,
                openModal,
                setOpenModal,
                productToShow,
                setProductToShow,
                totalProducts,
                deleteProduct,
                addProduct,
                openModalShopping,
                setOpenModalShopping,
                products,
                totalPriceProducts,
                deleteProducts,
                addOrder,
                deleteOrder,
                orders,
                items,
                setItems,
                openModalSaveCliente,
                setOpenModalSaveCliente,
                clients,
                setClients,
                openModalEliminarCliente,
                setOpenModalEliminarCliente,
                openModalEditarCliente,
                setOpenModalEditarCliente,
                openModalCrearProducto,
                setOpenModalCrearProducto,
                proveedores,
                setProveedores,
                openModalCrearProveedor,
                setOpenModalCrearProveedor,
                openModalEditarProveedor,
                setOpenModalEditarProveedor,
                openModalEliminarProveedor,
                setOpenModalEliminarProveedor,
                search,
                setSearch,
                filteredData
            }
        }>
            {children}
        </ShoppingCartContext.Provider>
    )
}