import { motion } from "framer-motion";
const Slide = ({ image, text, button }) => {
  return (
    <div className="flex lg:flex-row flex-col-reverse justify-center items-center pt-6">
      <div data-aos="fade-right" className="lg:w-3/5 w-full space-y-4">
        <h2 className="lg:text-5xl text-3xl font-bold ">{text}</h2>
        <button className="bg-neutral text-white font-semibold px-4 py-2">
          {button}
        </button>
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
