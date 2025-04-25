import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AddQuery = () => {
  const { user } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const brand = form.brand.value;
    const photo = form.photo.value;
    const title = form.title.value;
    const boycott = form.boycott.value;
    const queryDetails = {
      name,
      brand,
      photo,
      title,
      boycott,
      createdAt: new Date(),
      userInfo: {
        email: user?.email,
        name: user?.displayName,
        userImage: user?.photoURL,
      },
      currentTime: Date.now(),
      recommendationCount: 0,
    };
    console.log(queryDetails);

    axios
      .post(`${import.meta.env.VITE_API_URL}/addBid`, queryDetails, {
        withCredentials: true,
      })
      .then((data) => {
        console.log(data.data);
        form.reset();
        Swal.fire({
          title: "Query Added Successfully",
          icon: "success",
          draggable: false,
        });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: error.code,
          text: "Something went wrong!",
        });s
      });
  };

  return (
    <div className="hero">
      <div className="hero-content w-3/5 flex-col lg:flex-row-reverse">
        <div className="card shadow-2xl w-full">
          <div className="p-4 text-center">
            <h4 className="text-3xl font-semibold">Explore Our Query Form</h4>
            <p className="font-semibold">
              If your have any kind of issue, your are welcome to fill the form!
            </p>
          </div>
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="text-lg font-semibold">Product Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter Product Name"
                className="border-b border-gray-300 focus:outline-none focus:border-slate-900 custom-input p-2 rounded-lg"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="text-lg font-semibold">Product Brand</span>
              </label>
              <input
                type="text"
                name="brand"
                placeholder="Enter Brand Name"
                className="border-b border-gray-300 focus:outline-none focus:border-slate-900 custom-input p-2 rounded-lg"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="text-lg font-semibold">Product Image</span>
              </label>
              <input
                type="url"
                name="photo"
                placeholder="Enter Photo URL"
                className="border-b border-gray-300 focus:outline-none focus:border-slate-900 custom-input p-2 rounded-lg"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="text-lg font-semibold">Query Title</span>
              </label>
              <input
                type="text"
                name="title"
                placeholder="Enter Query Title"
                className="border-b border-gray-300 focus:outline-none focus:border-slate-900 custom-input p-2 rounded-lg"
                required
              />
            </div>

            <textarea
              placeholder="Enter Boycotting Reason"
              name="boycott"
              className="textarea h-[5rem] mt-4 textarea-bordered w-full resize-none custom-input p-2 rounded-lg"
            ></textarea>

            <div className="form-control mt-6">
              <button className="flex justify-center items-center gap-2 px-4 py-2 bg-[#62D0B4] text-white rounded-xl font-semibold">
                Add Query
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddQuery;
