import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import Recommendation from "../../Components/Recommendation";
import Loading from "../Loading/Loading";

const QueryDetails = () => {
  const queryInfo = useLoaderData();
  const { user, loading } = useContext(AuthContext);
  const [showRecommendation, setShowRecommendation] = useState([]);
  const { boycott, brand, name, createdAt, photo, title, _id, userInfo } =
    queryInfo;
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/recommend/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setShowRecommendation(data);
      });
  }, []);

  const handleRecommend = (e) => {
    e.preventDefault();
    const form = e.target;
    const product_title = form.product_title.value;
    const product_name = form.product_name.value;
    const photo = form.photo.value;
    const reason = form.reason.value;
    const recommendInfo = {
      product_title,
      product_name,
      photo,
      reason,
      queryId: _id,
      queryTitle: title,
      productName: name,
      recommender_name: user.displayName,
      recommender_email: user.email,
      user_name: userInfo.name,
      user_email: userInfo.email,
      current_time: new Date(),
    };
    console.log(recommendInfo);

    axios
      .post(`${import.meta.env.VITE_API_URL}/addRecommend`, recommendInfo)
      .then((data) => {
        console.log(data.data);
        form.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (loading) return <Loading></Loading>;
  return (
    <div className=" py-8">
      <div className="flex flex-col md:flex-row justify-around gap-5 items-center min-h-[calc(100vh-306px)] w-11/12 mx-auto">
        {/* Job Details */}
        <div className="flex-1  px-4 py-7 rounded-md md:min-h-[350px] shadow-xl border-[1px]">
          <div className="rounded-full object-cover overflow-hidden w-14 h-14">
            <img src={userInfo?.userImage} alt="" />
          </div>
          <div>
            <p className="mt-6 text-2xl font-semibold ">
              User Details:
            </p>
            <div className="flex items-center gap-5">
              <div>
                <p className="mt-2 text-xl font-semibold">
                  Name: {userInfo?.name}
                </p>
                <p className="mt-2 text-xl font-semibold">
                  Email: {userInfo?.email}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <section className="p-6 w-full rounded-md shadow-xl border-[1px] flex-1 md:min-h-[350px]">
            <h2 className="text-lg font-semibold capitalize ">
              Add your recommendation
            </h2>

            <form onSubmit={handleRecommend}>
              <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div>
                  <label className="" htmlFor="title">
                    Recommendation Title
                  </label>
                  <input
                    type="text"
                    name="product_title"
                    required
                    className="block w-full px-4 py-2 mt-2 border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                  />
                </div>

                <div>
                  <label className="" htmlFor="product_name">
                    Recommended Product Name
                  </label>
                  <input
                    type="text"
                    name="product_name"
                    className="block w-full px-4 py-2 mt-2 border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                  />
                </div>

                <div>
                  <label className="" htmlFor="photo">
                    Recommended Product Image
                  </label>
                  <input
                    name="photo"
                    type="url"
                    className="block w-full px-4 py-2 mt-2 border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                  />
                </div>

                <div>
                  <label className="" htmlFor="reason">
                    Recommendation Reason
                  </label>
                  <input
                    name="reason"
                    type="text"
                    className="block w-full px-4 py-2 mt-2 border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                  />
                </div>
              </div>

              <div className="flex justify-end mt-6">
                <button
                  type="submit"
                  className="flex items-center gap-2 px-4 py-2 bg-[#62D0B4] text-white rounded-xl font-semibold"
                >
                  Add Recommend
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
      {showRecommendation.length > 0 && (
        <h4 className="text-3xl font-semibold">
          See All The Recommendations made by people
        </h4>
      )}
      <div className="p-4 space-y-3">
        {showRecommendation.map((recommendation) => (
          <Recommendation
            recommendation={recommendation}
            key={recommendation._id}
          ></Recommendation>
        ))}
      </div>
    </div>
  );
};

export default QueryDetails;
