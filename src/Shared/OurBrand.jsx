import Headline from "./Headline";

const OurBrand = () => {
    return (
        <div className="px-5 lg:px-0">
            {/* our FAQ */}
            <div className="divider py-4"></div>
            <Headline headline={'Our Brand'}></Headline>
            <div className="bg-[#b9ffe2] p-10">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-screen-lg mx-auto bg-white p-5 rounded-lg">
                    <div className="hover:text-yellow-600">
                        <div className="flex justify-center mb-2">
                            <img className="w-32 h-24 hover:scale-110 duration-600 transition-all" src="https://i.ibb.co/5BfgPgj/tastydaily-1055746824.webp" alt="" />
                        </div>
                        <p className="text-center">BenOrganic</p>
                    </div>
                    <div className="hover:text-yellow-600">
                        <div className="flex justify-center mb-2">
                            <img className="w-24 h-24 hover:scale-110 duration-600 transition-all" src="https://i.ibb.co/mSr05wT/tastydaily-1040532022.jpg" alt="" />
                        </div>
                        <p className="text-center">Crystal Cove</p>
                    </div>
                    <div className="hover:text-yellow-600">
                        <div className="flex justify-center mb-2">
                            <img className="w-24 h-24 hover:scale-110 duration-600 transition-all" src="https://i.ibb.co/Rz15R1d/tastydaily-1040828229.jpg" alt="" />
                        </div>
                        <p className="text-center">Earth Check</p>
                    </div>
                    <div className="hover:text-yellow-600">
                        <div className="flex justify-center mb-2">
                            <img className="w-24 h-24 hover:scale-110 duration-600 transition-all" src="https://i.ibb.co/F49WFKw/tastydaily-1004449795.webp" alt="" />
                        </div>
                        <p className="text-center">Evian</p>
                    </div>
                    <div className="hover:text-yellow-600">
                        <div className="flex justify-center mb-2">
                            <img className="w-24 h-24 hover:scale-110 duration-600 transition-all" src="https://i.ibb.co/jh9gRm3/tastydaily-1040286886.jpg" alt="" />
                        </div>
                        <p className="text-center">Good Life Organi</p>
                    </div>
                    <div className="hover:text-yellow-600">
                        <div className="flex justify-center mb-2">
                            <img className="w-24 h-24 hover:scale-110 duration-600 transition-all" src="https://i.ibb.co/6JnmFgp/tastydaily-1028619405.jpg" alt="" />
                        </div>
                        <p className="text-center">James White Drinks</p>
                    </div>
                    <div className="hover:text-yellow-600">
                        <div className="flex justify-center mb-2">
                            <img className="w-24 h-24 hover:scale-110 duration-600 transition-all" src="https://i.ibb.co/ZfCHDyj/tastydaily-1040076824.jpg" alt="" />
                        </div>
                        <p className="text-center">Pure Citrus</p>
                    </div>
                    <div className="hover:text-yellow-600">
                        <div className="flex justify-center mb-2">
                            <img className="w-24 h-24 hover:scale-110 duration-600 transition-all" src="https://i.ibb.co/7SdsW7C/tastydaily-1033714022.jpg" alt="" />
                        </div>
                        <p className="text-center">Vita Coco</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurBrand;