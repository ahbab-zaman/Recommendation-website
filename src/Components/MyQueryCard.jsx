import { Link } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
const MyQueryCard = ({ query, deleteQuery, setDeleteQuery }) => {
  const { name, photo, brand, recommendationCount, _id } = query;
  const { user } = useContext(AuthContext);
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

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const user_name = form.user_name.value;
    const user_email = form.user_email.value;
    const product_name = form.name.value;
    const product_title = form.title.value;
    const product_brand = form.brand.value;
    const product_image = form.photo.value;
    const boycott = form.boycott.value;
    const updatedQuery = {
      user_name,
      user_email,
      product_name,
      product_title,
      product_brand,
      product_image,
      boycott,
    };
    console.log(updatedQuery);
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
          <Link to="/queryDetails">
            <button className="px-4 py-2 rounded-full bg-[#1c1c1ccd] font-semibold text-white">
              View Details
            </button>
          </Link>
        </div>
        <div className="flex justify-between items-center mt-2">
          <button onClick={() => handleDelete(_id)} className="btn">
            <MdDeleteForever className="text-[30px]"></MdDeleteForever>
          </button>
          <div className="btn">
            <FaEdit
              onClick={() => document.getElementById("my_modal_5").showModal()}
              className="text-[30px]"
            ></FaEdit>
          </div>
          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <form onSubmit={handleUpdate} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-lg font-semibold">
                      User Name
                    </span>
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    value={user?.displayName}
                    placeholder="User Name"
                    className="border-b border-gray-300 focus:outline-none focus:border-slate-900"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-lg font-semibold">
                      User Email
                    </span>
                  </label>
                  <input
                    type="text"
                    name="user_email"
                    value={user?.email}
                    placeholder="User Email"
                    className="border-b border-gray-300 focus:outline-none focus:border-slate-900"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-lg font-semibold">
                      Product Name
                    </span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Product Name"
                    className="border-b border-gray-300 focus:outline-none focus:border-slate-900"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-lg font-semibold">
                      Product Brand
                    </span>
                  </label>
                  <input
                    type="text"
                    name="brand"
                    placeholder="Enter Brand Name"
                    className="border-b border-gray-300 focus:outline-none focus:border-slate-900"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-lg font-semibold">
                      Product Image
                    </span>
                  </label>
                  <input
                    type="url"
                    name="photo"
                    placeholder="Enter Photo URL"
                    className="border-b border-gray-300 focus:outline-none focus:border-slate-900"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-lg font-semibold">
                      Query Title
                    </span>
                  </label>
                  <input
                    type="text"
                    name="title"
                    placeholder="Enter Query Title"
                    className="border-b border-gray-300 focus:outline-none focus:border-slate-900"
                    required
                  />
                </div>

                <textarea
                  placeholder="Enter Boycotting Reason"
                  name="boycott"
                  className="textarea h-[5rem] mt-4 textarea-bordered w-full resize-none"
                ></textarea>

                <div className="modal-action justify-center w-full">
                  <form method="dialog">
                    <button className="btn w-full bg-[#1c1c1ccd] text-[#fff] text-lg font-semibold rounded-none">
                      Update Query
                    </button>
                  </form>
                </div>
              </form>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default MyQueryCard;
