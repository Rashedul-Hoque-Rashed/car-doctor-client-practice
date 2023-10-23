import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.svg"

const Navbar = () => {

    // Home          About          Services          Blog          Contact

    const links = <>
        <li><NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-xl font-bold underline text-[#FF3811]" : ""
            }
        >
            Home
        </NavLink></li>
        <li><NavLink
            to="/about"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-xl font-bold underline text-[#FF3811]" : ""
            }
        >
            About
        </NavLink></li>
        <li><NavLink
            to="/services"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-xl font-bold underline text-[#FF3811]" : ""
            }
        >
            Services
        </NavLink></li>
        <li><NavLink
            to="/blog"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-xl font-bold underline text-[#FF3811]" : ""
            }
        >
            Blog
        </NavLink></li>
        <li><NavLink
            to="/contact"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-lg font-bold underline text-[#FF3811]" : ""
            }
        >
            Contact
        </NavLink></li>
    </>


    return (
        <div className="navbar bg-base-100 py-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-lg font-semibold">
                        {links}
                    </ul>
                </div>
                <Link to="/" className=""><img className="" src={logo} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="gap-8 menu-horizontal px-1 text-lg font-semibold">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn h-auto btn-outline normal-case text-lg font-semibold px-7 py-4 hover:border-[#FF3811] text-[#FF3811] hover:bg-[#FF4811] hover:text-white" >Appointment</button>
            </div>
        </div>
    );
};

export default Navbar;