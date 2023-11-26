import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <footer className="bg-[#FFE4DE] text-[#2c6be0ec] px-5 lg:px-0">
            <footer className="flex justify-between items-center pb-5 max-w-screen-md mx-auto">
                <aside className="w-1/2">
                    <Link to={'/'}>
                        <img className="w-40 -ml-12" src="https://i.ibb.co/6gmdTW5/attachment-24274505-removebg-preview.png" alt="" />
                    </Link>
                    <div className="-mt-10">
                        <h3 className="md:text-2xl text-lg font-semibold mb-3">Mega Group of Industries Ltd.</h3>
                        <p>Providing reliable tech since 2023</p>
                    </div>
                </aside>
                <nav>
                    <header className="footer-title md:mt-6">Social Contact</header>
                    <div className="grid grid-cols-4 gap-4 pt-6">
                        <Link target="_blank" to={'https://www.instagram.com/mohammadsakil43/?fbclid=IwAR2aQOYxSyad2_x8KXOqOU5ExbO7e1JTayPSZr1Gp52u06lxyIm481hJ58A'}>
                            <img className='w-6' src="https://i.ibb.co/C27KDmF/39386d212ac9a4626cd4f3fb25466503-removebg-preview.png" alt="" />
                        </Link>
                        <Link to={'https://www.facebook.com/WKmohammad.sakil'} target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg>
                        </Link>
                    </div>
                </nav>
            </footer>
            <div className="footer footer-center p-4 text-[#2c6be0ec] pb-5">
                <aside>
                    <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
                </aside>
            </div>
        </footer>
    );
};

export default Footer;