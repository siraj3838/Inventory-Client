import { Helmet } from "react-helmet-async";
import { FaHome } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import Footer from "../../Shared/Footer";
import { MdManageAccounts } from "react-icons/md";
import { BiSolidCollection } from "react-icons/bi";
import { FaUserSecret } from "react-icons/fa6";
import { FaCalculator } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import toast from "react-hot-toast";
import useManager from "../../Hook/useManager";
import useAdmin from "../../Hook/useAdmin";

const Dashboard = () => {
    // const [isManager] = useManager();
    // console.log(isManager);
    const [manager] = useManager();
    // console.log(manager?.email);
    const [isAdmin] = useAdmin();
    // console.log(isAdmin);

    const { logOut } = useContext(AuthContext);
    const handleLoggedOut = () => {
        logOut()
            .then(() => {
                toast.success('Log Out Successfully')
            })
            .catch(error => {
                console.error(error.message);
            })
    }


    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light",
    );

    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };

    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localTheme);
    }, [theme]);
    return (
        <div>
            <Helmet>
                <title>MGI | Dashboard</title>
            </Helmet>
            <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/5 min-h-[calc(100vh-60px)] bg-[#2c6be05e]">
                    <ul className="menu pt-3 grid grid-cols-1 text-lg font-medium">
                        <div className="flex items-center justify-between px-5 mb-10">
                            {
                                manager ?
                                    <img className="w-20" src="https://i.ibb.co/Wyscgxg/Screenshot-2023-11-24-115135-removebg-preview.png" alt="" />
                                    :
                                    <FaUserSecret className="text-5xl"></FaUserSecret>
                            }
                            <label className="swap swap-rotate ml-5">

                                <input onChange={handleToggle} type="checkbox" />

                                <svg
                                    className="swap-on text-black fill-current w-10 h-10"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                                </svg>

                                <svg
                                    className="swap-off fill-current w-10 h-10"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                                </svg>
                            </label>
                        </div>
                        {/* admin */}
                        {
                            isAdmin ? <>
                                <li>
                                    <NavLink
                                        to="/dashboard/manageShop"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "border-b-2 hover:scale-110 transition-all text-xl font-semibold hover:text-neutral-800 cursor-pointer border-b-[#2c6be0ec] text-[#2c6be0ec]" : " hover:scale-110 transition-all text-lg text-neutral-800 font-medium"
                                        }
                                    >
                                        <MdManageAccounts />  Manage Shop
                                    </NavLink>

                                </li>
                                <li>
                                    <NavLink
                                        to="/dashboard/adminSalesSummary"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "border-b-2 hover:scale-110 transition-all text-xl font-semibold hover:text-neutral-800 cursor-pointer border-b-[#2c6be0ec] text-[#2c6be0ec]" : " hover:scale-110 transition-all text-lg text-neutral-800 font-medium"
                                        }
                                    >
                                        <BiSolidCollection></BiSolidCollection>  Sales Summary
                                    </NavLink>

                                </li>
                            </>
                                :
                                ''
                        }


                        {/* manager */}
                        {
                            manager ? <>
                                <li>
                                    <NavLink
                                        to="/dashboard/shopManagement"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "border-b-2 hover:scale-110 transition-all text-xl font-semibold hover:text-neutral-800 cursor-pointer border-b-[#2c6be0ec] text-[#2c6be0ec]" : " hover:scale-110 transition-all text-lg text-neutral-800 font-medium"
                                        }
                                    >
                                        <MdManageAccounts></MdManageAccounts>  Shop Manager
                                    </NavLink>

                                </li>
                                <li>
                                    <NavLink
                                        to="/dashboard/salesCollection"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "border-b-2 hover:scale-110 transition-all text-xl font-semibold hover:text-neutral-800 cursor-pointer border-b-[#2c6be0ec] text-[#2c6be0ec]" : " hover:scale-110 transition-all text-lg text-neutral-800 font-medium"
                                        }
                                    >
                                        <BiSolidCollection></BiSolidCollection>   Sales Collection
                                    </NavLink>

                                </li>
                                <li>
                                    <NavLink
                                        to="/dashboard/salesSummary"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "border-b-2 hover:scale-110 transition-all text-xl font-semibold hover:text-neutral-800 cursor-pointer border-b-[#2c6be0ec] text-[#2c6be0ec]" : " hover:scale-110 transition-all text-lg text-neutral-800 font-medium"
                                        }
                                    >
                                        <FaCalculator />    Sales Summary
                                    </NavLink>

                                </li>
                                <li>
                                    <NavLink
                                        to="/dashboard/subscription"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "border-b-2 hover:scale-110 transition-all text-xl font-semibold hover:text-neutral-800 cursor-pointer border-b-[#2c6be0ec] text-[#2c6be0ec]" : " hover:scale-110 transition-all text-lg text-neutral-800 font-medium"
                                        }
                                    >
                                        <MdOutlinePayment />    Subscription
                                    </NavLink>

                                </li>
                            </>
                                :
                                ''
                        }
                        <div className="divider"></div>
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "border-b-2 hover:scale-110 transition-all text-xl font-semibold hover:text-neutral-800 cursor-pointer border-b-[#2c6be0ec] text-[#2c6be0ec]" : " hover:scale-110 transition-all text-lg text-neutral-800 font-medium"
                                }
                            >
                                <FaHome></FaHome> Home
                            </NavLink>

                        </li>
                        <li>
                            <button onClick={handleLoggedOut} className="font-semibold hover:scale-110 duration-600 transition-all">Log Out</button>
                        </li>
                    </ul>
                </div>
                <div className="flex-1 px-5 lg:px-0">
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;