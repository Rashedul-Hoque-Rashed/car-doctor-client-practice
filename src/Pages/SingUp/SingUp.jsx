import { FaFacebook, FaGoogle, FaLinkedin } from "react-icons/fa6";
import img1 from "../../assets/images/login/login.svg"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";

const SingUp = () => {

    const { createUser } = useContext(AuthContext);

    const handelSingUp = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, email, password);

        createUser(email, password)
            .then(res => console.log(res.user))
            .catch(error => console.error(error.message))
    }



    return (
        <div className="mt-10 mb-32 px-10">
            <div className="hero-content flex-col gap-24 lg:flex-row items-center">
                <div className="w-1/2">
                    <img src={img1} alt="" />
                </div>
                <div className="card w-1/2 px-16 shadow-2xl bg-base-100 py-16">
                    <h1 className="text-4xl font-semibold text-center mb-12">Sing Up</h1>
                    <form onSubmit={handelSingUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Your Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-4">
                            <button className="btn bg-[#FF3811] text-white hover:bg-[#FF4811]">Sing Up</button>
                        </div>
                    </form>
                    <p className="text-center mt-4 mb-8 text-lg font-medium">Or Sign Un with</p>
                    <div className="flex gap-4 justify-center">
                        <button className="bg-[#F5F5F8] rounded-full">
                            <FaFacebook className="w-8 h-8 m-3 text-[#3B5998] " />
                        </button>
                        <button className="bg-[#F5F5F8] rounded-full">
                            <FaLinkedin className="w-8 h-8 m-3 text-[#0A66C2] " />
                        </button>
                        <button className="bg-[#F5F5F8] rounded-full">
                            <FaGoogle className="w-8 h-8 m-3 text-[#3C79E6] " />
                        </button>
                    </div>
                    <p className="text-lg font-normal text-[#737373] mt-12 text-center">Already have an account? <Link to="/login" className="font-semibold text-[#FF3811] hover:underline">Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SingUp;