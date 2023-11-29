
import { useContext } from 'react';
import useAxiosPublic from '../../../../Hook/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../../Providers/AuthProvider';
import Headline from '../../../../Shared/Headline';

const SalesSummary = () => {
    const myAxios = useAxiosPublic();
    const { user } = useContext(AuthContext);
    const { data: chartData = [] } = useQuery({
        queryKey: ['all-stats', user?.email],
        queryFn: async () => {
            const res = await myAxios.get(`/pendingPaid?email=${user?.email}`);
            return res.data;
        }
    })
    const totalInvest = chartData.reduce((pre, cur) => pre + cur.totalInvest, 0)
    const totalSellingPrice = chartData.reduce((pre, cur) => pre + cur.totalSellingPrice, 0)
    const totalSelling = parseFloat(totalSellingPrice.toFixed(2)) 
    const totalProfit = totalSellingPrice - totalInvest
    console.log(totalInvest, totalSelling);

    const loop = chartData.map(item => item.price)
    const sortDate = loop.sort((a, b) => new Date(b) - new Date(a));
    console.log(sortDate);

    return (
        <div>
            <Headline headline={'Sales Count'}></Headline>
            <div className='px-5 grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                <div className='bg-lime-200 flex items-center justify-evenly'>
                    <img className='w-20' src="https://i.ibb.co/FxFBTvg/3271314-removebg-preview.png" alt="" />
                    <div className='flex flex-col gap-6 rounded-md items-center py-12'>
                        <h2 className='text-3xl font-medium'>{chartData ? totalSelling : 0}$</h2>
                        <h3 className='text-xl font-medium'>Total Sale</h3>
                    </div>
                </div>
                <div className='bg-purple-300 flex items-center justify-evenly'>
                    <img className='w-20' src="https://i.ibb.co/z5xS7R2/3310653-removebg-preview.png" alt="" />
                    <div className='flex flex-col gap-6 rounded-md items-center py-12'>
                        <h2 className='text-3xl font-medium'>{chartData ? totalInvest : 0}$</h2>
                        <h3 className='text-xl font-medium'>Total Invest</h3>
                    </div>
                </div>
                <div className='bg-green-300 flex items-center justify-evenly'>
                    <img className='w-20' src="https://i.ibb.co/3zxStsM/investing-png-image-5a3c470ba54746-224151831513899787677-removebg-preview.png" alt="" />
                    <div className=' flex flex-col gap-6 rounded-md items-center py-12'>
                        <h2 className='text-3xl font-medium'>{chartData ? totalProfit : 0}$</h2>
                        <h3 className='text-xl font-medium'>Total Profit</h3>
                    </div>
                </div>


            </div>
            <Headline headline={'Sales History'}></Headline>
            <div className="my-10">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr className='grid md:grid-cols-5 lg:grid-cols-7 text-xl border-4'>
                            <th className='col-span-3'>Product Name</th>
                            <th className='col-span-2 border-l-4 border-r-4 text-center'>Selling date</th>
                            <th className='text-center'>Profit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            chartData.map((item) => <tr className="grid md:grid-cols-5 lg:grid-cols-7" key={item._id}>
                                <td className='col-span-3'>
                                    <h2>
                                        {item?.productName}
                                    </h2>
                                </td>
                                <th className='col-span-2'><h4 className='text-center'>{item?.date}</h4></th>
                                <td><h3 className='text-center'>{item?.totalProfit?.toFixed(2)}$</h3></td>

                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SalesSummary;