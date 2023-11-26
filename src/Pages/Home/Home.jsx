import { Helmet } from "react-helmet-async";
import HomeFirstBanner from "../../Shared/HomeFirstBanner";
import About from "../../Shared/About";
import NewsLetter from "../../Shared/NewsLetter";
import Contact from "../../Shared/Contact";
import Testimonials from "../../Shared/Testimonials/Testimonials"

const Home = () => {
    return (
        <div className="my-6">
            <Helmet>
                <title>MGI | Home</title>
            </Helmet>
            <HomeFirstBanner></HomeFirstBanner>
            <NewsLetter></NewsLetter>
            <About></About>
            <Contact></Contact>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;