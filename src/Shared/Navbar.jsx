import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import toast from "react-hot-toast";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const navList = <>
        <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "border-b-2 hover:scale-110 transition-all text-xl font-semibold hover:text-neutral-800 cursor-pointer border-b-[#2c6be0ec] text-[#2c6be0ec]" : " hover:scale-110 transition-all text-lg text-neutral-800 font-medium"
            }
        >
            Home
        </NavLink>
        {user ? ''
            :
            <>
                <NavLink
                    to="/login"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "border-b-2 hover:scale-110 transition-all text-xl font-semibold hover:text-neutral-800 cursor-pointer border-b-[#2c6be0ec] text-[#2c6be0ec]" : " hover:scale-110 transition-all text-lg text-neutral-800 font-medium"
                    }
                >
                    Login
                </NavLink>
                <NavLink
                    to="/register"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "border-b-2 hover:scale-110 transition-all text-xl font-semibold hover:text-neutral-800 cursor-pointer border-b-[#2c6be0ec] text-[#2c6be0ec]" : " hover:scale-110 transition-all text-lg text-neutral-800 font-medium"
                    }
                >
                    Register
                </NavLink>
            </>}
        <NavLink
            to="/createStore"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "border-b-2 hover:scale-110 transition-all text-xl font-semibold hover:text-neutral-800 cursor-pointer border-b-[#2c6be0ec] text-[#2c6be0ec]" : " hover:scale-110 transition-all text-lg text-neutral-800 font-medium"
            }
        >
            Create Store
        </NavLink>
        <NavLink
            to="/dashboard"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "border-b-2 hover:scale-110 transition-all text-xl font-semibold hover:text-neutral-800 cursor-pointer border-b-[#2c6be0ec] text-[#2c6be0ec]" : " hover:scale-110 transition-all text-lg text-neutral-800 font-medium"
            }
        >
            Dashboard
        </NavLink>
        <NavLink
            to="https://youtu.be/vxUfuJtN-LQ?feature=shared" target="_blank"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "border-b-2 hover:scale-110 transition-all text-xl font-semibold hover:text-neutral-800 cursor-pointer border-b-[#2c6be0ec] text-[#2c6be0ec]" : " hover:scale-110 transition-all text-lg text-neutral-800 font-medium"
            }
        >
            Watch Demo
        </NavLink>
    </>
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
        <div className="">
            <div className="navbar px-5 mx-auto fixed z-10 max-w-screen-2xl bg-[#FFE4DE] mb-10 top-0">
                <div className="lg:navbar-start mr-14 md:mr-0">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-36">
                            {navList}
                        </ul>
                    </div>
                    <div className="flex items-center gap-2">
                        <Link to={'/'}>
                            <img className="w-36 hidden md:block" src="https://i.ibb.co/CvRcvP2/MGI-Logo-removebg-preview.png" alt="" />
                        </Link>
                        <h2 className="text-2xl font-semibold italic text-[#22417c]">Mega Group</h2>
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
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex items-center gap-12">
                        {navList}
                    </ul>
                </div>
                <div className="md:navbar-end md:ml-36 lg:ml-0">
                    {
                        user?.email ? <div className="flex justify-center items-center gap-2 md:gap-10 lg:gap-5">
                            <h2 className="text-xl font-semibold text-[#22417c] hover:text-[#2e59aa] cursor-pointer">{user?.displayName}</h2>
                            <button onClick={handleLoggedOut} className="bg-[#2c6be0ec] hover:bg-[#245dc7] font-semibold hover:scale-110 duration-600 transition-all py-2 px-2 rounded-lg text-white ">Log Out</button>
                            <img className="w-16 h-16 rounded-full" src={user?.photoURL}></img>
                        </div>
                            :
                            ''
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;