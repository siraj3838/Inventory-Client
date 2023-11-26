import Headline from "./Headline";

const Contact = () => {
    return (
        <div>
            <div className="divider py-4"></div>
            <Headline headline={'Contact Us'}></Headline>
            <div className="hero h-[500px] bg-fixed" style={{ backgroundImage: 'url(https://i.ibb.co/8mXQhRf/Screenshot-2023-11-25-194700.png)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className=" mt-5 mx-auto text-[#2c6be0d7] p-5">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-xl mx-auto">
                        {/* first */}
                        <div className="bg-[#15151565] bg-opacity-50 p-5 rounded-md">
                            <h2 className="text-lg font-semibold pb-4">HEAD OFFICE</h2>
                            <p>Fresh Villa</p>
                            <p>House # 15, Road # 34, Gulshan-1</p>
                            <p>Dhaka-1212, Bangladesh</p>
                            <p>Phone : +880-174135203</p>
                            <p>Fax : +880 2222289361,</p>
                            <p>Email: ayasaBegum134@gmail.com</p>
                        </div>
                        {/* second */}
                        <div className="bg-[#15151565] bg-opacity-50 p-5 rounded-md">
                            <h2 className="text-lg font-semibold pb-4">FMCG OFFICE</h2>
                            <p>Star Villa</p>
                            <p>House # 23, Road # 24, Gulshan-2,</p>
                            <p>Dhaka-1212, Bangladesh,</p>
                            <p>Phone : +880-1794665853,</p>
                            <p>Fax : +880 2222289361,</p>
                            <p>Email: siraj457689@gmail.com</p>
                        </div>
                        {/* third */}
                        <div className="bg-[#15151565] bg-opacity-50 p-5 rounded-md">
                            <h2 className="text-lg font-semibold pb-4">CHATTOGRAM OFFICE</h2>
                            <p>Raising Villa</p>
                            <p>World Trade Center (6th Floor),</p>
                            <p>102-103, Agrabad C/A, Chattogram,</p>
                            <p>Phone : +880-1707864053,</p>
                            <p>Fax : +8802333313749</p>
                            <p>Email: mohammadsakil43@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;