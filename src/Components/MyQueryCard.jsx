import { Link } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
const MyQueryCard = ({ query, deleteQuery, setDeleteQuery }) => {
  const { name, photo, brand, recommendationCount, _id } = query;
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
        const deletedData = async () => {
          const { data } = await axios.delete(
            `${import.meta.env.VITE_API_URL}/deletedQuery/${id}`
          );
          if (data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            const remainingQuery = deleteQuery.filter((dq) => dq._id !== id);
            setDeleteQuery(remainingQuery);
          }
        };
        deletedData();
      }
    });
  };

  return (
    <div className="card shadow-xl">
      <figure>
        <img src={photo} className="w-full h-[400px]" alt="product" />
      </figure>
      <div className="card-body p-5">
        <h2 className="card-title">
          <div className="badge badge-secondary">{brand}</div>
        </h2>
        <p className="text-lg font-bold">{name}</p>
        <p className="text-lg font-semibold">
          Recommend_count : {recommendationCount}
        </p>
        <div>
          <Link to={`/queryDetails/${_id}`}>
            <button className="px-4 py-2 rounded-full bg-[#1c1c1ccd] font-semibold text-white">
              View Details
            </button>
          </Link>
        </div>
        <div className="flex justify-between items-center mt-2">
          <button onClick={() => handleDelete(_id)} className="btn">
            <MdDeleteForever className="text-[30px]"></MdDeleteForever>
          </button>
          <Link to={`/updateQuery/${_id}`}>
            <div className="btn">
              <FaEdit className="text-[30px]"></FaEdit>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyQueryCard;
