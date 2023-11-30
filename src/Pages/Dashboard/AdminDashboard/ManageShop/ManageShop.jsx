
import Headline from "../../../../Shared/Headline";
import useSecureAxios from "../../../../Hook/useSecureAxios";
import { useEffect, useState } from "react";
import { AiFillCloseSquare } from "react-icons/ai";
import { Helmet } from "react-helmet-async";

const ManageShop = () => {
    const myAxios = useSecureAxios();
    const [allUsers, setAllUsers] = useState([]);
    useEffect(() => {
        myAxios.get('/allStores')
            .then(res => {
                setAllUsers(res.data);
            })
    }, [myAxios])
    return (
        <div>
            <Helmet>
                <title>MGI | Admin | Manage Shop</title>
            </Helmet>
            <Headline headline={'All Users Information'}></Headline>
            <div className="my-10">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr className=" text-center text-sm md:text-[12px] md:text-left md:justify-between flex flex-col md:flex-row">
                            <th className="lg:text-lg md:pl-10 lg:pl-20">Shop Logo</th>
                            <th className="lg:text-lg md:pl-10 lg:pl-4">Shop Name</th>
                            <th className="lg:text-lg">Product Limit</th>
                            <th className="lg:text-lg">Shop Description</th>
                            <th className="lg:text-lg">Send Notice Button</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allUsers?.map((item) => <tr data-aos="flip-left"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000" className="flex flex-col md:flex-row lg:text-lg text-base md:text-[12px] md:justify-between text-center md:text-left" key={item._id}>
                                <td>
                                    <hr />
                                    <div className="flex justify-center">
                                        <img className="lg:w-36 h-20 w-20 lg:h-36 rounded-md" src={item?.shopLogo} alt="" />
                                    </div>
                                </td>
                                <th className="flex items-center justify-center md:justify-start"><h4 className="lg:text-base">{item?.shopName}</h4></th>
                                <td className="flex items-center justify-center md:justify-start"><h3 className="lg:text-lg md:pl-1 lg:pl-7">{item?.productLimit}</h3></td>
                                <td className="flex items-center justify-center md:justify-start"><h5 className="lg:text-lg md:pl-5 lg:pl-14">{item?.shopInfo}</h5></td>
                                <td className="md:pl-10 lg:pl-20 flex items-center justify-center md:justify-start">
                                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                                    <button className="bg-blue-500 border-r-2 border-black text-white font-semibold text-sm lg:text-lg py-1 px-2 lg:py-3 lg:px-2 hover:bg-blue-600 rounded-md" onClick={() => document.getElementById('my_modal_5').showModal()}>Send Notice</button>
                                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                        <div className="modal-box px-10 bg-[#FFE4DE]">
                                            <div className="modal-action">
                                                <h2 className="text-xl font-semibold pr-16">Send Promotional Email</h2>
                                                <form method="dialog">
                                                    {/* if there is a button in form, it will close the modal */}
                                                    <button className="">
                                                        <AiFillCloseSquare className="text-4xl"></AiFillCloseSquare>
                                                    </button>
                                                </form>
                                            </div>
                                            <form className="mt-5">
                                                <input className="py-2 px-3 w-full mb-5 bg-base-200" type="text" placeholder="Type Here" name="adminMail" />
                                                <input type="submit" value="Send" className="bg-blue-500 mb-5 border-r-2 border-black text-white font-semibold text-sm lg:text-lg py-1 px-2 lg:py-3 lg:px-2 hover:bg-blue-600 rounded-md w-full" />
                                            </form>

                                        </div>
                                    </dialog>
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageShop;