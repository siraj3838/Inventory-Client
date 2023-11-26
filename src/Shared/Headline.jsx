/* eslint-disable react/prop-types */

const Headline = ({ headline }) => {
    return (
        <div className="px-5 lg:px-0">
            <div className="max-w-screen-md mt-10 mb-6 mx-auto bg-[#FFE4DE] shadow-2xl py-3 lg:py-4 rounded-tr-full rounded-bl-full">
                <h2 className="text-2xl md:text-3xl lg:text-5xl text-[#2c6be0d7] font-medium  pb-4 text-center">
                    {headline}
                </h2>
            </div>
        </div>
    );
};

export default Headline;