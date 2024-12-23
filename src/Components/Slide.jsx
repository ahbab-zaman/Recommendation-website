/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Slide = ({ image, text, button }) => {
  return (
    <div
      className="w-full bg-center bg-cover bg-no-repeat h-[35rem]"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="flex items-center justify-center w-full h-full bg-gray-900/70">
        <div className="text-center">
          <h1 className="font-semibold text-4xl text-white italic ">
            {text}
          </h1>
          <br />
          <Link to="/addQuery"
            className="w-full px-5 py-4 mt-4 text-lg font-bold text-white uppercase transition-colors duration-300 transform bg-gray-600 rounded-md lg:w-auto hover:bg-gray-500 focus:outline-none focus:bg-gray-500"
          >
            {button}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Slide;
