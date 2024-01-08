import Marquee from "react-fast-marquee";
import Headline from "./Headline";

const OurSponsor = () => {
    return (
        <div>
            {/* our sponsor */}
            <div className="divider py-4"></div>
            <Headline headline={'Our Sponsors'}></Headline>
             <Marquee direction="left">
                <img className="w-56 h-44 ml-5 my-5" src="https://i.ibb.co/Wz6Dc6h/11118486012a9d40967f.jpg" alt="" />
                <img className="w-56 ml-5 my-5 h-44" src="https://i.ibb.co/2k1GB0z/77505e4cd72ea0a4c.jpg" alt="" />
                <img className="w-56 ml-5 my-5 h-44" src="https://i.ibb.co/Kw7SxLC/102064773a9d427f2.jpg" alt="" />
                <img className="w-56 ml-5 my-5 h-44" src="https://i.ibb.co/4NMgt46/logo.png" alt="" />
                <img className="w-56 ml-5 my-5 h-44" src="https://i.ibb.co/ZmrCMjK/5fc8be7abf1a1.png" alt="" />
                <img className="w-56 ml-5 my-5 h-44" src="https://i.ibb.co/Wg73rG6/variflight-400w.png" alt="" />
                <img className="w-56 ml-5 my-5 h-28" src="https://i.ibb.co/9GcSSDT/seabury-400w.png" alt="" />
            </Marquee>
             <Marquee direction="right">
                <img className="w-56 ml-5 my-5 h-36" src="https://i.ibb.co/T2jdPp7/A-K-Khan-Company-logo.png" alt="" />
                <img className="w-56 ml-5 my-5 h-36" src="https://i.ibb.co/thkh7WZ/ACI-logo-svg.png" alt="" />
                <img className="w-56 ml-5 my-5 h-36" src="https://i.ibb.co/XW0VHr9/Agamee-Prakashani-logo-svg.png" alt="" />
                <img className="w-56 ml-5 my-5 h-36" src="https://i.ibb.co/GC9ycLV/Agkijlogo.gif" alt="" />
                <img className="w-56 ml-5 my-5 h-36" src="https://i.ibb.co/ZYzSS6y/Alim-Industries-Limited-logo.png" alt="" />
                <img className="w-56 ml-5 my-5 h-36" src="https://i.ibb.co/g7ks49z/Beximco-logo.png" alt="" />
                <img className="w-56 ml-5 my-5 h-36" src="https://i.ibb.co/xHhy17S/City-Group-Logo.png" alt="" />
            </Marquee>
        </div>
    );
};

export default OurSponsor;