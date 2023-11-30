import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import CreateStore from "../Pages/CreateStore/CreateStore";
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
import ManagerRoute from "./PrivateRouter/ManagerRouter";
import AdminRoute from "./PrivateRouter/AdminRoute";
import PaymentCheckForm from "../Pages/Dashboard/DashbordAllPage/Subscription/PaymentCheckForm";

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
                element: <ManagerRoute><ShopManagement></ShopManagement></ManagerRoute>
            },
            {
                path: 'addToProduct',
                element: <ManagerRoute><AddToProduct></AddToProduct></ManagerRoute>
            },
            {
                path: 'updateProduct/:id',
                element: <ManagerRoute><UpdateProduct></UpdateProduct></ManagerRoute>
            },
            {
                path: 'salesCollection',
                element: <ManagerRoute><SalesCollection></SalesCollection></ManagerRoute>
            },
            {
                path: 'checkOutCart',
                element: <ManagerRoute><CheckOutCart></CheckOutCart></ManagerRoute>
            },
            {
                path: 'salesSummary',
                element: <ManagerRoute><SalesSummary></SalesSummary></ManagerRoute>
            },
            {
                path: 'subscription',
                element: <ManagerRoute><Subscription></Subscription></ManagerRoute>
            },
            {
                path: 'checkOut/:id',
                element: <ManagerRoute><CheckOut></CheckOut></ManagerRoute>
            },
            {
                path: 'paymentForm/:price',
                element: <ManagerRoute><PaymentCheckForm></PaymentCheckForm></ManagerRoute>
            },
            // admin
            {
                path: 'manageShop',
                element: <AdminRoute><ManageShop></ManageShop></AdminRoute>
            },
            {
                path: 'adminSalesSummary',
                element: <AdminRoute><AdminSalesSummary></AdminSalesSummary></AdminRoute>
            }
        ]
    },
])

export default MyRouter;