import axios from "axios";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";

const Recommendation = ({ recommendation }) => {
  const { photo, product_name, current_time, reason, recommender_name, _id } =
    recommendation;
  return (
    <div>
      <div className="p-4 "></div>
      <div className="max-w-md border border-yellow-500 bg-[#2B3440] text-white p-4 rounded-lg shadow-md">
        <div className="flex items-center space-x-4">
          {/* User Info */}
          <div>
            <h2 className="text-lg font-bold text-yellow-500">
              {recommender_name}
            </h2>
            <p className="text-sm text-gray-400">{current_time}</p>
          </div>
        </div>
        {/* User Message */}
        <div className="my-2">
          <img className="w-24 h-24 rounded-xl" src={photo} alt="" />
          <h4>
            Recommended Product:{" "}
            <span className="text-yellow-500">{product_name}</span>
          </h4>
          <p>
            Why should people choose it:{" "}
            <span className="text-yellow-500">{reason}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Recommendation;
