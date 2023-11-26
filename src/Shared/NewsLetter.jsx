
import useAxiosPublic from "../Hook/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const NewsLetter = () => {
    const myAxios = useAxiosPublic();
    const { data: newsLetter = [], refetch } = useQuery({
        queryKey: ['allLetters'],
        queryFn: async () => {
            const res = await myAxios.get('/allLetters')
            refetch();
            return res.data;
        }
    })

    return (
        <div className="my-8">

            <div className="hero h-[500px] bg-fixed" style={{ backgroundImage: 'url(https://i.ibb.co/Jp5YN6M/Screenshot-2023-11-25-130259.png)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="">
                    <div className="max-w-screen-md mt-10 mb-6 mx-auto bg-[#15151565] bg-opacity-50 text-[#2c6be0d7] shadow-2xl py-3 lg:py-4 px-10 rounded-tr-full rounded-bl-full">
                        <h2 className="text-2xl md:text-3xl lg:text-5xl font-medium  pb-4 text-center">
                            News Letter MGI
                        </h2>
                    </div>
                </div>

            </div>

            <div className="max-w-screen-lg mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-5 gap-y-10 mt-5 px-5 lg:px-0">
                {
                    newsLetter.map(news => <div className="group shadow-2xl pb-2" key={news._id}>
                        <div
                            className='w-full relative overflow-hidden'>
                            <img
                                className='object-cover h-full w-full group-hover:scale-110 transition duration-700' src={news?.img}
                                alt='News Letter'
                            />
                            <div className='absolute top-3 right-3'>
                            </div>
                        </div>
                        <h3 className="text-xl text-[#033185d7] font-medium pt-2 pl-2">{news?.title}</h3>
                    </div>)
                }
            </div>

        </div>
    );
};

export default NewsLetter;