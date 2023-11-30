import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../../Hook/useAdmin";
import { AuthContext } from "../../Providers/AuthProvider";
import Loading from "../../Shared/Loading";

const AdminRoute = ({children}) => {

    const location = useLocation();
    const {user, loading} = useContext(AuthContext);
    const [isAdmin, isPending] = useAdmin(); 

    if(loading || isPending){
        return <Loading></Loading>
    }

    if(user && isAdmin){
        return children
    }

    return <Navigate to="/" state={{ from: location }} replace></Navigate>
};

export default AdminRoute;