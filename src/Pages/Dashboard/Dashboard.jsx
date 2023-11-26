import { Helmet } from "react-helmet-async";
import { FaHome } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useManager from "../../Hook/useManager";

const Dashboard = () => {
    const [isManager] = useManager();
    console.log(isManager);
    return (
        <div>
            <Helmet>
                <title>MGI | Dashboard</title>
            </Helmet>
            <div className="flex ">
                <div className="w-1/4 min-h-screen bg-[#ffc4b7]">
                    <ul className="menu p-4">
                        <img src="" alt="" />
                        <li>
                            <NavLink to={'/dashboard/adminHome'}>
                                <FaHome></FaHome> Admin Home</NavLink>

                        </li>
                    </ul>
                </div>
                <div className="flex-1">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;