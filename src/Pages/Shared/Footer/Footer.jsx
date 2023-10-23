import { FaGoogle, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";
import logo from "../../../assets/logo.svg"


const Footer = () => {
    return (
        <footer className="footer bg-base-300 text-base-content px-10 py-24">
            <aside>
                <img className="text-black" src={logo} alt="" />
                <p className="text-[#151515] w-72 my-5">Edwin Diaz is a software and web technologies engineer, a life coach trainer who is also a serial .</p>
                <div className="flex gap-3">
                    <FaGoogle className="w-12 h-12 p-2 text-black rounded-full"/>
                    <FaInstagram className="w-12 h-12 p-2 text-black rounded-full"/>
                    <FaTwitter className="w-12 h-12 p-2 text-black rounded-full"/>
                    <FaLinkedin className="w-12 h-12 p-2 text-black rounded-full"/>
                </div>
            </aside>
            <nav>
                <header className="footer-title text-black text-xl font-semibold">About</header>
                <a className="link link-hover text-[#151515] text-base font-normal">Home</a>
                <a className="link link-hover text-[#151515] text-base font-normal">Service</a>
                <a className="link link-hover text-[#151515] text-base font-normal">Contact</a>
            </nav>
            <nav>
                <header className="footer-title text-black text-xl font-semibold">Company</header>
                <a className="link link-hover text-[#151515] text-base font-normal">Why Car Doctor</a>
                <a className="link link-hover text-[#151515] text-base font-normal">About</a>
            </nav>
            <nav>
                <header className="footer-title text-black text-xl font-semibold">Support</header>
                <a className="link link-hover text-[#151515] text-base font-normal">Support Center</a>
                <a className="link link-hover text-[#151515] text-base font-normal">Feedback</a>
                <a className="link link-hover text-[#151515] text-base font-normal">Accessability</a>
            </nav> 
        </footer>
    );
};

export default Footer;