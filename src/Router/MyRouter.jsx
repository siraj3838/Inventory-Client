import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import CreateStore from "../Pages/CreateStore/CreateStore";
import WatchDemo from "../Pages/WatchDemo/WatchDemo";
import PrivateRouter from "./PrivateRouter/PrivateRouter";
import Dashboard from "../Pages/Dashboard/Dashboard";
import ShopManagement from "../Pages/Dashboard/DashbordAllPage/ShopManagement/ShopManagement";
import AddToProduct from "../Pages/Dashboard/DashbordAllPage/ShopManagement/AddToProduct";
import UpdateProduct from "../Pages/Dashboard/DashbordAllPage/ShopManagement/UpdateProduct";
import SalesCollection from "../Pages/Dashboard/DashbordAllPage/SalesCollection/SalesCollection";
import CheckOut from "../Pages/Dashboard/DashbordAllPage/SalesCollection/CheckOut/CheckOut";
import CheckOutCart from "../Pages/Dashboard/DashbordAllPage/CheckOutCart/CheckOutCart";
import SalesSummary from "../Pages/Dashboard/DashbordAllPage/SalesSummary/SalesSummary";
import Subscription from "../Pages/Dashboard/DashbordAllPage/Subscription/Subscription";
import ManageShop from "../Pages/Dashboard/AdminDashboard/ManageShop/ManageShop";
import AdminSalesSummary from "../Pages/Dashboard/AdminDashboard/AdminSalesSummary/AdminSalesSummary";

const MyRouter = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            
            {
                path: '/createStore',
                element: <PrivateRouter><CreateStore></CreateStore></PrivateRouter>
            },
            
            {
                path: '/watchDemo',
                element: <WatchDemo></WatchDemo>
            },
            

        ]
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/register',
        element: <Register></Register>
    },
    {
        path: 'dashboard',
        element: <PrivateRouter><Dashboard></Dashboard></PrivateRouter>,
        children: [
            {
                path: 'shopManagement',
                element: <ShopManagement></ShopManagement>
            },
            {
                path: 'addToProduct',
                element: <AddToProduct></AddToProduct>
            },
            {
                path: 'updateProduct/:id',
                element: <UpdateProduct></UpdateProduct>
            },
            {
                path: 'salesCollection',
                element: <SalesCollection></SalesCollection>
            },
            {
                path: 'checkOutCart',
                element: <CheckOutCart></CheckOutCart>
            },
            {
                path: 'salesSummary',
                element: <SalesSummary></SalesSummary>
            },
            {
                path: 'subscription',
                element: <Subscription></Subscription>
            },
            {
                path: 'checkOut/:id',
                element: <CheckOut></CheckOut>
            },
            // admin
            {
                path: 'manageShop',
                element: <ManageShop></ManageShop>
            },
            {
                path: 'adminSalesSummary',
                element: <AdminSalesSummary></AdminSalesSummary>
            }
        ]
    },
])

export default MyRouter;