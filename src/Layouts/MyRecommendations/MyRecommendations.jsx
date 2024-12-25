import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import { AiFillDelete } from "react-icons/ai";
import Swal from "sweetalert2";

const MyRecommendations = () => {
  const { user } = useContext(AuthContext);
  const [recommend, setRecommend] = useState([]);
  const [deleteRecommendation, setDeleteRecommendation] =
  useState(recommend);
  useEffect(() => {
    const fetchedData = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/allRecommend/${user?.email}`
      );
      setDeleteRecommendation(data);
    };
    fetchedData();
  }, [user]);

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
      <div className="overflow-x-auto py-6">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Recommended Product</th>
              <th>Product Title</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {deleteRecommendation.map((reco, idx) => (
              <tr reco={reco} key={reco._id}>
                <th>{idx + 1}</th>
                <td>{reco.product_name}</td>
                <td>{reco.product_title}</td>
                <td>
                  <img
                    className="w-10 h-10 rounded-full"
                    src={reco.photo}
                    alt=""
                  />
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(reco._id)}
                    className="btn rounded-full"
                  >
                    <AiFillDelete className="text-3xl" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyRecommendations;
