import { useEffect, useState } from "react";
import useAxiosPublic from "../../../../Hook/useAxiosPublic";
import Headline from "../../../../Shared/Headline";
import UsersSection from "./UsersSection";

const AdminSalesSummary = () => {
    const myAxios = useAxiosPublic();
    const [totalIncome, setTotalIncome] = useState(0);
    const [totalProduct, setTotalProduct] = useState(0);
    const [totalSales, setTotalSales] = useState(0);
    


    useEffect(()=>{
        myAxios.get('/allProductsAdmin')
        .then(res => {
            setTotalProduct(res?.data?.length)
        })
    },[myAxios])
    useEffect(()=>{
        myAxios.get('/pendingPaidAdmin')
        .then(res => {
            const allSales = res?.data;
            const total = allSales.reduce((pre, cur)=> pre + cur?.totalSellingPrice, 0)
            setTotalSales(total);
        })
    }, [myAxios])


    return (
        <div>
            <Headline headline={'Sales Summary'}></Headline>
            <div className='px-5 grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                <div className='bg-lime-200 flex items-center justify-evenly'>
                    <img className='w-20' src="https://i.ibb.co/FxFBTvg/3271314-removebg-preview.png" alt="" />
                    <div className='flex flex-col gap-6 rounded-md items-center py-12'>
                        <h2 className='text-3xl font-medium'>{totalIncome}$</h2>
                        <h3 className='text-xl font-medium'>Total Income</h3>
                    </div>
                </div>
                <div className='bg-purple-300 flex items-center justify-evenly'>
                    <img className='w-20' src="https://i.ibb.co/z5xS7R2/3310653-removebg-preview.png" alt="" />
                    <div className='flex flex-col gap-6 rounded-md items-center py-12'>
                        <h2 className='text-3xl font-medium'>{totalProduct}</h2>
                        <h3 className='text-xl font-medium'>Total Product</h3>
                    </div>
                </div>
                <div className='bg-green-300 flex items-center justify-evenly'>
                    <img className='w-20' src="https://i.ibb.co/3zxStsM/investing-png-image-5a3c470ba54746-224151831513899787677-removebg-preview.png" alt="" />
                    <div className=' flex flex-col gap-6 rounded-md items-center py-12'>
                        <h2 className='text-3xl font-medium'>{totalSales}$</h2>
                        <h3 className='text-xl font-medium'>Total Sales</h3>
                    </div>
                </div>


            </div>
            <div className="">
                    <div className="max-w-screen-md mt-10 mb-6 mx-auto bg-[#83cfe29c] bg-opacity-50 text-[#2c6be0d7] shadow-2xl py-3 lg:py-4 px-10 rounded-tr-full rounded-bl-full ">
                        <h2 className="text-2xl md:text-3xl lg:text-5xl font-medium  pb-4 text-center">
                            Our All Users
                        </h2>
                    </div>
                </div>
            <UsersSection></UsersSection>
        </div>
    );
};

export default AdminSalesSummary;