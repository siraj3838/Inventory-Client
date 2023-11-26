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
            }
        ]
    },
])

export default MyRouter;