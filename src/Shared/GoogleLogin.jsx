// import { useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../Providers/AuthProvider";
// // import useAxiosPublic from "../Hook/useAxiosPublic";
// import toast from "react-hot-toast";

// const GoogleLogin = () => {
//     const { googleLoggedIn } = useContext(AuthContext);
//     const navigate = useNavigate();
//     // const myAxios = useAxiosPublic();
//     const handleGoogleLogin = () => {
//         googleLoggedIn()
//             .then(res => {
//                 console.log(res.user);
//                 toast.success('Register Successfully')
//                 navigate('/')
//                 // const userInfo = { name: res?.user?.displayName, email: res?.user?.email, photoURL: res?.user?.photoURL };
//                 // myAxios.post('/allUsers', userInfo)
//                 //     .then(res => {
//                 //         console.log(res.data);
//                 //     })
//             })
//             .catch(error => {
//                 console.log(error);
//             })
//     }
//     return (
//         <div>
//             <div className="mb-5">
//                 <div className="divider"></div>
//                 <button onClick={handleGoogleLogin} className="hover:scale-110 hover:bg-base-200 duration-600 transition-all bg-base-100 rounded-lg w-full flex justify-center">
//                     <img className="w-24 py-2" src="https://i.ibb.co/ChDq6PD/Google-2015-logo-svg-removebg-preview.png" alt="" />
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default GoogleLogin;