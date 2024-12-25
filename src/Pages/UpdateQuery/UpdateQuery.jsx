import { useContext, useEffect } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateQuery = () => {
  const { user } = useContext(AuthContext);
  const updatedQuery = useLoaderData();
  const navigate = useNavigate();
  console.log(updatedQuery);
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
            <span className="label-text text-lg font-semibold">User Name</span>
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
            <span className="label-text text-lg font-semibold">User Email</span>
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
            defaultValue={updatedQuery.name}
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
            defaultValue={updatedQuery.brand}
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
            defaultValue={updatedQuery.photo}
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
            defaultValue={updatedQuery.title}
            placeholder="Enter Query Title"
            className="border-b border-gray-300 focus:outline-none focus:border-slate-900"
            required
          />
        </div>

        <textarea
          placeholder="Enter Boycotting Reason"
          name="boycott"
          defaultValue={updatedQuery.boycott}
          className="textarea h-[5rem] mt-4 textarea-bordered w-full resize-none"
        ></textarea>

        <div className="justify-center w-full">
          <button className="btn w-full bg-[#1c1c1ccd] text-[#fff] text-lg font-semibold rounded-none">
            Update Query
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateQuery;
