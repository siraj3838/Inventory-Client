import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import useManagerRouter from "../../Hook/useManagerRouter";
import Loading from "../../Shared/Loading";

const ManagerRoute = ({children}) => {

    const location = useLocation();
    const {user, loading} = useContext(AuthContext);
    const [isManager, isPending] = useManagerRouter(); 

    if(loading || isPending){
        return <Loading></Loading>
    }

    if(user && isManager){
        return children
    }

    return <Navigate to="/" state={{ from: location }} replace></Navigate>
};

export default ManagerRoute;