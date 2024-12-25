import axios from "axios";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";

const Recommendation = ({
  recommendation,
  deleteRecommendation,
  setDeleteRecommendation,
}) => {
  const { photo, product_name, current_time, reason, recommender_name, _id } =
    recommendation;

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const deletedRecommendation = async () => {
          const { data } = await axios.delete(
            `${import.meta.env.VITE_API_URL}/deleteRecommendation/${id}`
          );
          if (data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            const remainingRecommendation = deleteRecommendation.filter(
              (recommend) => recommend._id !== id
            );
            setDeleteRecommendation(remainingRecommendation);
          }
        };
        deletedRecommendation();
      }
    });
  };
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
          <div onClick={() => handleDelete(_id)} className="flex justify-end">
            <button onClick={() => handleDelete(_id)} className="btn">
              <MdDeleteForever className="text-[30px] text-[#2B3440]"></MdDeleteForever>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommendation;
