import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const GoogleLogin = () => {
    const {googleLoggedIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const handleGoogleLogin = () => {
        googleLoggedIn()
        .then(res =>{
            console.log(res.user);
            navigate(from, { replace: true })
        })
        .catch(error =>{
            console.log(error);
        })
    }
    return (
        <div>
            <div className="mb-5">
            <div className="divider"></div> 
                <button onClick={handleGoogleLogin} className="hover:scale-110 hover:bg-base-200 duration-600 transition-all bg-base-100 rounded-lg w-full flex justify-center">
                   <img className="w-24 py-2" src="https://i.ibb.co/ChDq6PD/Google-2015-logo-svg-removebg-preview.png" alt="" />
                </button>
            </div>
        </div>
    );
};

export default GoogleLogin;