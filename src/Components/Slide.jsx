import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Slide = ({ image, text, button, link }) => {
  return (
    <div className="flex lg:flex-row flex-col-reverse justify-center items-center pt-6">
      <div
        data-aos="fade-right"
        data-aos-offset="120"
        data-aos-duration="1000"
        data-aos-easing="ease-out-cubic"
        data-aos-delay="400"
        className="lg:w-3/5 w-full space-y-4"
      >
        <h2 className="lg:text-5xl text-3xl font-bold mb-4">{text}</h2>
        <Link to={link}>
          <button className="bg-neutral text-white font-semibold px-4 py-2">
            {button}
          </button>
        </Link>
      </div>
      <div className="lg:w-[40%] w-full">
        <motion.img
          className="w-full"
          src={image}
          alt=""
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
      </div>
    </div>
  );
};

export default Slide;
