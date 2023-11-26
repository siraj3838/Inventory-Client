import { useContext } from "react";
import Headline from "../Headline";
import { FaExclamationCircle } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProvider";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import Swal from "sweetalert2";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { useQuery } from "@tanstack/react-query";
import Rating from "react-rating";
import { Link } from "react-router-dom";


const Testimonials = () => {
    const myAxios = useAxiosPublic();
    const { user } = useContext(AuthContext);

    const { data: allFeedBacks = [], refetch } = useQuery({
        queryKey: ['feedBacks'],
        queryFn: async () => {
            const res = await myAxios.get('/feedBacks')
            refetch();
            return res.data;
        }
    })

    const userFeedBack = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const rating = form.rating.value;
        const userMessage = form.userMessage.value;
        const userPhoto = user?.photoURL
        const feedBack = { name, email, userMessage, rating, userPhoto }
        // console.log(feedBack);
        myAxios.post('/feedBacks', feedBack)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Thanks For Your FeedBack",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    window.location.reload();
                }
            })
            .catch(err => {
                console.log(err);
            })
    }


    return (
        <div>
            <div className="divider pt-8 pb-5"></div>
            <Headline headline={'Customer Testimonials'}></Headline>
            <div className="flex justify-center max-w-screen-md mx-auto">
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    {
                        allFeedBacks.map(feed => <SwiperSlide key={feed._id}>
                            <div className="grid md:grid-cols-3 gap-4 bg-slate-100 p-5 text-[#2c6be0d7]">
                                <div className="flex items-center">
                                    <img className="w-3/4 h-36 border-8 border-blue-200 rounded-tl-3xl rounded-br-3xl" src={feed?.userPhoto} alt="" />
                                </div>
                                <div className="col-span-2 space-y-2">
                                    <div>
                                        <h4 className="text-lg font-semibold text-yellow-600">
                                            <Rating
                                                emptySymbol={<svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={1.5}
                                                    stroke="currentColor"
                                                    className="w-6 h-6"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                                    />
                                                </svg>}
                                                fullSymbol={<svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                    className="w-6 h-6"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>}
                                                initialRating={feed?.rating}
                                                readonly
                                            />
                                        </h4>
                                    </div>
                                    <h4 className="text-xl font-medium">{feed?.name}</h4>
                                    <p>{feed?.email}</p>
                                    <p className="h-16 w-full ">{feed?.userMessage}</p>
                                </div>
                            </div>
                        </SwiperSlide>)
                    }

                </Swiper>
            </div>
            <div className="mt-14 px-5 lg:px-0">
                <h2 className="text-3xl font-semibold text-[#2c6be0d7] text-center mb-7">SAY SOMETHING!</h2>
                <div className="bg-blue-200 max-w-screen-md mx-auto p-5 rounded-md">
                    <form onSubmit={userFeedBack}>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="col-span-1 space-y-3">
                                <input type="text" className="w-full py-2 px-3 rounded-md" name="name" defaultValue={user?.displayName} readOnly />
                                <input type="email" className="w-full py-2 px-3 rounded-md" name="email" defaultValue={user?.email} readOnly />
                                <input type="text" className="w-full py-2 px-3 rounded-md" name="rating" placeholder="Please give Rating" required />
                            </div>
                            <div className="col-span-1">
                                <textarea name="userMessage" placeholder="Type Some Message" className="w-full p-3 rounded-md" id="" cols="30" rows="5"></textarea>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6 mt-3">
                            <div className="flex items-center gap-3 pl-2">
                                <FaExclamationCircle></FaExclamationCircle>
                                <p>All the fields are required</p>
                            </div>
                            {
                                user ? <button type="submit" className="bg-[#2c6be0ec] hover:bg-[#245dc7] font-semibold hover:scale-110 duration-600 transition-all py-2  w-full rounded-lg text-white ">Submit Message</button>
                                    :
                                    <Link to={'/login'}>
                                        <button className="bg-[#2c6be0ec] hover:bg-[#245dc7] font-semibold hover:scale-110 duration-600 transition-all py-2  w-full rounded-lg text-white ">Submit Message</button>
                                    </Link>
                            }
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;