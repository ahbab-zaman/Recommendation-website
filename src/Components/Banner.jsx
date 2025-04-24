import { Link } from "react-router-dom";
import banner from "../assets/banner-1.svg";
const Banner = () => {
  return (
    <>
      <section className="flex lg:flex-row flex-col justify-between items-center">
        <div className="lg:w-1/2 w-11/12 pl-4 space-y-3">
          <h1 className="lg:text-6xl text-3xl font-semibold">
            Personalized Recommendation <br /> as a Service
          </h1>
          <p className="text-[#778484] lg:w-3/4 w-11/12">
            Become the architect of your success with our AI personalization
            engine designed to align with the visionary strategy of product
            managers and tech teams.
          </p>
          <div>
            <Link to="/addQuery">
              <button className="bg-[#EBF9F5] text-[#35B091] py-2 px-4 rounded-full font-semibold border-[1px] border-[#35B091]">
                Start Free
              </button>
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2 w-full">
          <figure>
            <img src={banner} alt="" />
          </figure>
        </div>
      </section>
    </>
  );
};

export default Banner;
