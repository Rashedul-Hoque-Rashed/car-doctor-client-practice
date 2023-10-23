import img1 from "../../../assets/images/products/1.png"
import img2 from "../../../assets/images/products/2.png"
import img3 from "../../../assets/images/products/3.png"
import img4 from "../../../assets/images/products/4.png"
import img5 from "../../../assets/images/products/5.png"
import img6 from "../../../assets/images/products/6.png"

const Products = () => {
    return (
        <div className="my-32">
            <div className="text-center">
                <h4 className="text-xl font-bold text-[#FF3811] mb-5">Popular Products</h4>
                <h2 className="text-5xl font-bold text-[#151515] mb-5">Browse Our Products</h2>
                <p className="text-[#737373] w-[680px] mx-auto capitalize leading-7 mb-12">the majority have suffered alteration in some form, by injected humour, or randomized words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                <div className="card w-96 bg-base-100 rounded-xl border border-[#E8E8E8]">
                    <figure className="px-6 pt-6 bg-[#F3F3F3] rounded-xl mt-6 mx-6 w-[314px] h-[214px]">
                        <img src={img1} alt="Led light" className="rounded-xl px-20 py-10" />
                    </figure>
                    <div className="card-body items-center text-center">
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked/>
                    </div>
                        <h2 className="card-title text-2xl font-bold text-[#444] my-2.5">Cools Led Light</h2>
                        <p className="text-xl font-semibold text-[#FF3811]">$20.00</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 rounded-xl border border-[#E8E8E8]">
                    <figure className="px-6 pt-6 bg-[#F3F3F3] rounded-xl mt-6 mx-6 w-[314px] h-[214px]">
                        <img src={img2} alt="Led light" className="rounded-xl px-20 py-10" />
                    </figure>
                    <div className="card-body items-center text-center">
                    <div className="rating">
                        <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" checked/>
                    </div>
                        <h2 className="card-title text-2xl font-bold text-[#444] my-2.5">Cools Led Light</h2>
                        <p className="text-xl font-semibold text-[#FF3811]">$20.00</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 rounded-xl border border-[#E8E8E8]">
                    <figure className="px-6 pt-6 bg-[#F3F3F3] rounded-xl mt-6 mx-6 w-[314px] h-[214px]">
                        <img src={img3} alt="Led light" className="rounded-xl px-20 py-10" />
                    </figure>
                    <div className="card-body items-center text-center">
                    <div className="rating">
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" checked/>
                    </div>
                        <h2 className="card-title text-2xl font-bold text-[#444] my-2.5">Cools Led Light</h2>
                        <p className="text-xl font-semibold text-[#FF3811]">$20.00</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 rounded-xl border border-[#E8E8E8]">
                    <figure className="px-6 pt-6 bg-[#F3F3F3] rounded-xl mt-6 mx-6 w-[314px] h-[214px]">
                        <img src={img4} alt="Led light" className="rounded-xl px-20 py-10" />
                    </figure>
                    <div className="card-body items-center text-center">
                    <div className="rating">
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked/>
                    </div>
                        <h2 className="card-title text-2xl font-bold text-[#444] my-2.5">Cools Led Light</h2>
                        <p className="text-xl font-semibold text-[#FF3811]">$20.00</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 rounded-xl border border-[#E8E8E8]">
                    <figure className="px-6 pt-6 bg-[#F3F3F3] rounded-xl mt-6 mx-6 w-[314px] h-[214px]">
                        <img src={img5} alt="Led light" className="rounded-xl px-20 py-10" />
                    </figure>
                    <div className="card-body items-center text-center">
                    <div className="rating">
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked/>
                    </div>
                        <h2 className="card-title text-2xl font-bold text-[#444] my-2.5">Cools Led Light</h2>
                        <p className="text-xl font-semibold text-[#FF3811]">$20.00</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 rounded-xl border border-[#E8E8E8]">
                    <figure className="px-6 pt-6 bg-[#F3F3F3] rounded-xl mt-6 mx-6 w-[314px] h-[214px]">
                        <img src={img6} alt="Led light" className="rounded-xl px-20 py-10" />
                    </figure>
                    <div className="card-body items-center text-center">
                    <div className="rating">
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked/>
                    </div>
                        <h2 className="card-title text-2xl font-bold text-[#444] my-2.5">Cools Led Light</h2>
                        <p className="text-xl font-semibold text-[#FF3811]">$20.00</p>
                    </div>
                </div>

            </div>
            <div className="text-center">
                <button className="btn h-auto btn-outline normal-case text-lg font-semibold px-7 py-4 hover:border-[#FF3811] text-[#FF3811] hover:bg-[#FF4811] hover:text-white" >More Services</button>
            </div>
        </div>
    );
};

export default Products;