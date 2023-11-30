import { useState } from "react";
import useAxiosPublic from "../../../../Hook/useAxiosPublic";
import { AiFillCloseSquare } from "react-icons/ai";
import { useQuery } from "@tanstack/react-query";

const UsersSection = () => {
    const myAxios = useAxiosPublic();
    // const [users, setUsers] = useState([]);
    const [page, setPage] = useState(0);

    const { data: { result, postCount } = {} } = useQuery({
        queryKey: ['poster', page],
        queryFn: async () => {
            const res = await myAxios.get(`/allUsers?page=${page}`)
            return res.data
        },
        initialData: { result: [], postCount: 0 }
    })
    const totalPage = Math.ceil(postCount / 6);
    const pages = [...new Array(totalPage).fill(0)]
    return (
        <div className="px-5 mb-10">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    result?.map((user, index) => <div data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" className="bg-blue-200 rounded-md px-6 py-10 space-y-2 " key={user._id}>
                        <div className="flex justify-between items-center">
                            <h2 className="text-lg font-medium text-gray-700">{user?.role == 'admin' ? 'Admin Name:' : 'User Name:'} {user?.name}</h2>
                            <h3 className="text-right text-2xl">
                                {
                                    index + 1
                                }
                            </h3>
                        </div>
                        <h2 className="font-semibold text-gray-600">Shop Name: ({user?.shopName ? user?.shopName : 'No Store'})</h2>
                        <h2 className="font-semibold">Role: ({user?.role ? user?.role : 'user'})</h2>
                        <h2 className="text-gray-500 pt-3">User Email: {user?.email}</h2>
                        {
                            user.shopName || user.role == 'admin' ? '' : <div>
                                <button className="bg-blue-500 border-r-2 border-black text-white font-semibold text-sm lg:text-lg py-1 px-2 lg:py-2 lg:px-2 hover:bg-blue-600 rounded-md mt-5" onClick={() => document.getElementById('my_modal_5').showModal()}>Send Promotional Email</button>
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
                            </div>
                        }
                    </div>)
                }
            </div>
            <div className="flex justify-center my-10">
                {
                    pages.map((item, index) => <button key={index} onClick={() => setPage(index)} className={`${page == index ? 'bg-blue-500 text-white' : 'text-black bg-white'} mb-5 border-r-2 font-semibold text-sm lg:text-lg py-1 px-2 lg:py-2 lg:px-4 hover:bg-blue-600 hover:text-white rounded-md ml-3`}>{index + 1}</button>)
                }

            </div>

        </div>
    );
};

export default UsersSection;