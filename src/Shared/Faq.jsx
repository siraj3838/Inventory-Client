
import Headline from "./Headline";
import { Link } from "react-router-dom";

const Faq = () => {
    return (
        <div className="px-5 lg:px-0">
            {/* our FAQ */}
            <div className="divider py-4"></div>
            <Headline headline={'FAQ'}></Headline>
            <div className="grid lg:grid-cols-2 gap-6 max-w-screen-xl mx-auto">
                <div className="join join-vertical w-full" data-aos="flip-right"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">
                    <h3 className="text-3xl px-3 font-semibold mb-4">Delivery</h3>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" checked="checked" />
                        <div className="collapse-title text-xl font-medium">
                        How long does it take us to deliver?
                        </div>
                        <div className="collapse-content">
                            <p>We deliver within 24/48 hours within Bangladesh. And I complete the delivery within 4-7 days outside Bangladesh.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                        Can you deliver everywhere?
                        </div>
                        <div className="collapse-content">
                            <p>Yes of course. We can deliver products wherever our customers want.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                        How do you charge for product delivery?
                        </div>
                        <div className="collapse-content">
                            <p>We determine the charges based on the product. If you want to receive the order in Bangladesh, the delivery charge will be 5% of the product and if outside Bangladesh, 15%. And in case of heavier product is subject to negotiation.</p>
                        </div>
                    </div>
                </div>
                <div className="join join-vertical w-full" data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">
                    <h3 className="text-3xl px-3 font-semibold mb-4">Shipping</h3>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                        Do you deliver products through any shipping method?
                        </div>
                        <div className="collapse-content">
                            <p>Within Bangladesh by vehicle and if outside Bangladesh to neighboring countries then by train and if further away then by ship.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                        How is your shipping process?
                        </div>
                        <div className="collapse-content">
                            <p>We pack the products very well and if the product is more important then we ship it in a box along with the packaging.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                        What day does your shipping start?
                        </div>
                        <div className="collapse-content">
                            <p>All days of the week except Friday.</p>
                        </div>
                    </div>
                </div>
                <div className="join join-vertical w-full" data-aos="flip-right"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">
                    <h3 className="text-3xl px-3 font-semibold mb-4">Support</h3>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                        What are the rules to contact you?
                        </div>
                        <div className="collapse-content">
                            <p>This is our email you can mail us anytime. <br />
                            <span className="font-semibold text-black">email: sirajul.islam583853@gmail.com</span>
                            </p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                        Do you have a social profile?
                        </div>
                        <div className="collapse-content">
                        <p>Yes of course. You can copy and paste our social links in a new tab or click the link<br />
                            <span className="font-semibold text-black">Facebook: <Link to={'https://web.facebook.com/WKmohammad.sakil'}><span className="text-blue-500 underline">https://web.facebook.com/WKmohammad.sakil</span></Link></span> <br />
                            <span className="font-semibold text-black">Linkedin: <Link to={'https://www.linkedin.com/in/sirajul-islam-41845a2a0/'}><span className="text-blue-500 underline">https://www.linkedin.com/in/sirajul-islam-41845a2a0/</span></Link></span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;