import { useContext, useEffect } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import Loading from "../Loading/Loading";

const UpdateQuery = () => {
  const { user, loading } = useContext(AuthContext);
  const updatedQuery = useLoaderData();
  const navigate = useNavigate();
  if (loading) return <Loading></Loading>;
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const user_name = form.user_name.value;
    const user_email = form.user_email.value;
    const name = form.name.value;
    const title = form.title.value;
    const brand = form.brand.value;
    const photo = form.photo.value;
    const boycott = form.boycott.value;
    const updatedData = {
      user_name,
      user_email,
      name,
      title,
      brand,
      photo,
      boycott,
    };
    console.log(updatedData);

    fetch(`${import.meta.env.VITE_API_URL}/queryUpdate/${updatedQuery._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Item Updated Successfully",
            text: "Check Your Equipment LIst",
            icon: "success",
            confirmButtonText: "OK",
          });
          navigate("/myQueries");
        }
      });
  };
  return (
    <div>
      <form onSubmit={handleUpdate} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="text-lg font-semibold">User Name</span>
          </label>
          <input
            type="text"
            name="user_name"
            value={user?.displayName}
            placeholder="User Name"
            className="border-b border-gray-300 focus:outline-none focus:border-slate-900 custom-input p-2 rounded-lg"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="text-lg font-semibold">User Email</span>
          </label>
          <input
            type="text"
            name="user_email"
            value={user?.email}
            placeholder="User Email"
            className="border-b border-gray-300 focus:outline-none focus:border-slate-900 custom-input p-2 rounded-lg"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="text-lg font-semibold">Product Name</span>
          </label>
          <input
            type="text"
            name="name"
            defaultValue={updatedQuery.name}
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
            defaultValue={updatedQuery.brand}
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
            defaultValue={updatedQuery.photo}
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
            defaultValue={updatedQuery.title}
            placeholder="Enter Query Title"
            className="border-b border-gray-300 focus:outline-none focus:border-slate-900 custom-input p-2 rounded-lg"
            required
          />
        </div>

        <textarea
          placeholder="Enter Boycotting Reason"
          name="boycott"
          defaultValue={updatedQuery.boycott}
          className="block w-full h-[5rem] resize-none px-4 py-2 mt-2 border border-gray-200 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring custom-input custom-input p-2 rounded-lg"
        ></textarea>
        <div className="flex justify-center w-full">
          <button className="flex justify-center items-center text-center gap-2 px-4 py-2 bg-[#62D0B4] text-white rounded-xl font-semibold w-full">
            Update Query
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateQuery;
