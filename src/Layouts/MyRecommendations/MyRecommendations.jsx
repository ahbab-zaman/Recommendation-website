import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import { AiFillDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import Loading from "../../Pages/Loading/Loading";

const MyRecommendations = () => {
  const { user, loading } = useContext(AuthContext);
  const [deleteRecommendation, setDeleteRecommendation] = useState([]);
  useEffect(() => {
    if (user?.email) {
      const fetchedData = async () => {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/allRecommend/${user?.email}`
        );
        setDeleteRecommendation(data);
      };
      fetchedData();
    }
  }, [user]);

  const handleDelete = (item) => {
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
          const { data } = await axios.put(
            `${import.meta.env.VITE_API_URL}/decreaseCount/${item._id}`,
            item
          );
          if (data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            const remainingRecommendation = deleteRecommendation.filter(
              (recommend) => recommend._id !== item._id
            );
            setDeleteRecommendation(remainingRecommendation);
          }
        };
        deletedRecommendation();
      }
    });
  };

  if (loading) return <Loading></Loading>;
  return (
    <div>
      {deleteRecommendation.length > 0 ? (
        <>
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
                        onClick={() => handleDelete(reco)}
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
        </>
      ) : (
        <div className="pt-6 h-screen flex flex-col justify-center items-center">
          <h2 className="text-3xl font-bold">No Recommendation of mine</h2>
        </div>
      )}
    </div>
  );
};

export default MyRecommendations;
