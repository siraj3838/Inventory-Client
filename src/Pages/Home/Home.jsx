import { Helmet } from "react-helmet-async";
import HomeFirstBanner from "../../Shared/HomeFirstBanner";
import About from "../../Shared/About";
import NewsLetter from "../../Shared/NewsLetter";
import Contact from "../../Shared/Contact";
import Testimonials from "../../Shared/Testimonials/Testimonials";
import OurSponsor from "../../Shared/OurSponsor";
import Faq from "../../Shared/Faq";
import OurBrand from "../../Shared/OurBrand";

const Home = () => {
    return (
        <div className="my-6">
            <Helmet>
                <title>MGI | Home</title>
            </Helmet>
            <HomeFirstBanner></HomeFirstBanner>
            <NewsLetter></NewsLetter>
            <OurBrand></OurBrand>
            <About></About>
            <Contact></Contact>
            <Faq></Faq>
            <OurSponsor></OurSponsor>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;