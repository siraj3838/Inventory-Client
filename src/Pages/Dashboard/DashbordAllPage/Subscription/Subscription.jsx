import Headline from "../../../../Shared/Headline";
import { FaCheckCircle } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";

const Subscription = () => {
    return (
        <div>
            <Headline headline={'Our Spacial Offer Subscription'}></Headline>
            <div className="px-5 grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-white mt-5 mb-10">
                <div className="rounded-tl-2xl rounded-bl-2xl">
                    <div className="flex justify-center items-center py-10 bg-blue-400 rounded-2xl">
                        <div className="text-center">
                            <h5 className="md:text-xl font-medium">BASIC</h5>
                            <h3 className="text-3xl lg:text-5xl font-bold">10$</h3>
                        </div>
                    </div>
                    <div className="rounded-2xl bg-base-200 py-8 text-left space-y-3 text-black">
                        <div className="flex items-center px-10 md:px-16 lg:px-20 gap-3 text-lg">
                            <p className="text-green-500"><FaCheckCircle /></p>
                            <p>Product limit to 200</p>
                        </div>
                        <div className="flex items-center px-10 md:px-16 lg:px-20 gap-3 text-lg">
                            <p className="text-green-500"><FaCheckCircle /></p>
                            <p>Normal Discount</p>
                        </div>
                        <div className="flex items-center px-10 md:px-16 lg:px-20 gap-3 text-lg">
                            <p className="text-green-500"><FaCheckCircle /></p>
                            <p>Normal Service</p>
                        </div>
                        <div className="flex items-center px-10 md:px-16 lg:px-20 gap-3 text-lg">
                            <p className="text-red-500 text-xl"><AiFillCloseCircle /></p>
                            <p>Monthly Bonus</p>
                        </div>
                        <div className="flex items-center px-10 md:px-16 lg:px-20 gap-3 text-lg">
                            <p className="text-red-500 text-xl"><AiFillCloseCircle /></p>
                            <p>Weekly Bonus</p>
                        </div>
                        <div className="flex justify-center pt-6">
                            <button className="bg-[#2c6be0ec] hover:bg-[#245dc7] font-semibold hover:scale-110 duration-600 transition-all py-4 px-3 rounded-3xl text-white">Purchase</button>
                        </div>
                    </div>
                </div>
                <div className="rounded-tl-2xl rounded-bl-2xl">
                    <div className="flex justify-center items-center py-10 bg-[#ffbf47] rounded-2xl">
                        <div className="text-center">
                            <h5 className="md:text-xl font-medium">PRO</h5>
                            <h3 className="text-3xl lg:text-5xl font-bold">20$</h3>
                        </div>
                    </div>
                    <div className="rounded-2xl bg-base-200 py-8 text-left space-y-3 text-black">
                        <div className="flex items-center px-10 md:px-16 lg:px-20 gap-3 text-lg">
                            <p className="text-green-500"><FaCheckCircle /></p>
                            <p>Product limit to 450</p>
                        </div>
                        <div className="flex items-center px-10 md:px-16 lg:px-20 gap-3 text-lg">
                            <p className="text-green-500"><FaCheckCircle /></p>
                            <p>Good Discount</p>
                        </div>
                        <div className="flex items-center px-10 md:px-16 lg:px-20 gap-3 text-lg">
                            <p className="text-green-500"><FaCheckCircle /></p>
                            <p>Good Service</p>
                        </div>
                        <div className="flex items-center px-10 md:px-16 lg:px-20 gap-3 text-lg">
                            <p className="text-green-500"><FaCheckCircle /></p>
                            <p>Monthly Bonus</p>
                        </div>
                        <div className="flex items-center px-10 md:px-16 lg:px-20 gap-3 text-lg">
                            <p className="text-red-500 text-xl"><AiFillCloseCircle /></p>
                            <p>Weekly Bonus</p>
                        </div>
                        <div className="flex justify-center pt-6">
                            <button className="bg-[#ffbf47] hover:bg-[#bf8f36] font-semibold hover:scale-110 duration-600 transition-all py-4 px-3 rounded-3xl text-white">Purchase</button>
                        </div>
                    </div>
                </div>
                <div className="rounded-tl-2xl rounded-bl-2xl">
                    <div className="flex justify-center items-center py-10 bg-[#36c976d4] rounded-2xl">
                        <div className="text-center">
                            <h5 className="md:text-xl font-medium">PREMIUM</h5>
                            <h3 className="text-3xl lg:text-5xl font-bold">50$</h3>
                        </div>
                    </div>
                    <div className="rounded-2xl bg-base-200 py-8 text-left space-y-3 text-black">
                        <div className="flex items-center px-10 md:px-16 lg:px-20 gap-3 text-lg">
                            <p className="text-green-500"><FaCheckCircle /></p>
                            <p>Product limit to 1500</p>
                        </div>
                        <div className="flex items-center px-10 md:px-16 lg:px-20 gap-3 text-lg">
                            <p className="text-green-500"><FaCheckCircle /></p>
                            <p>Best Discount</p>
                        </div>
                        <div className="flex items-center px-10 md:px-16 lg:px-20 gap-3 text-lg">
                            <p className="text-green-500"><FaCheckCircle /></p>
                            <p>Best Service</p>
                        </div>
                        <div className="flex items-center px-10 md:px-16 lg:px-20 gap-3 text-lg">
                            <p className="text-green-500"><FaCheckCircle /></p>
                            <p>Monthly Bonus</p>
                        </div>
                        <div className="flex items-center px-10 md:px-16 lg:px-20 gap-3 text-lg">
                            <p className="text-green-500"><FaCheckCircle /></p>
                            <p>Weekly Bonus</p>
                        </div>
                        <div className="flex justify-center pt-6">
                            <button className="bg-[#36c976d4] hover:bg-[#46a26ed4] font-semibold hover:scale-110 duration-600 transition-all py-4 px-3 rounded-3xl text-white">Purchase</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscription;