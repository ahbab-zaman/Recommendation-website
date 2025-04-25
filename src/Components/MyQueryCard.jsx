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
    <div className="card shadow-xl border-[#62D0B4] border-[1px]">
      <figure>
        <img src={photo} className="w-full h-[400px]" alt="product" />
      </figure>
      <div className="card-body lg:p-5 p-0">
        <h2 className="card-title">
          <div className="bg-[#62D0B4] text-[#fff] px-3 py-[2px] text-sm rounded-full">
            {brand}
          </div>
        </h2>
        <p className="text-lg font-bold">{name}</p>
        <div className="flex items-center font-semibold tracking-wide space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 fill-current mt-[4px]"
            viewBox="0 0 20 20"
          >
            <path d="M18 10c0 1.657-1.79 3-4 3H7l-4 4V6c0-1.657 1.79-3 4-3h7c2.21 0 4 1.343 4 3v4z" />
          </svg>
          <span>{recommendationCount}</span>
        </div>
        <div>
          <Link to={`/queryDetails/${_id}`}>
            <button className="py-2 px-4 rounded-xl text-[#62D0B4] font-bold bg-[#EBF9F5] border-[#62D0B4] border-[1px]">
              View Details
            </button>
          </Link>
        </div>
        <div className="flex lg:flex-row flex-col lg:justify-between justify-center gap-2 items-center mt-2">
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
