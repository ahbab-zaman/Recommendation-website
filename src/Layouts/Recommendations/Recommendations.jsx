import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Recommendations = () => {
  const [myRecommend, setMyRecommend] = useState([]);
  const [recommender, setRecommender] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchedData = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/recommender/${user?.email}`
        );
        console.log(data);
        setRecommender(data);
      } catch (error) {
        console.log(error);
      }
    };
    if (user) {
      fetchedData();
    }
  }, [user]);

  useEffect(() => {
    const myQueries = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/myRecommend/${user?.email}`
        );
        console.log(data);
        setMyRecommend(data);
      } catch (error) {
        console.log(error);
      }
    };
    if (user) {
      myQueries();
    }
  }, [user]);
  return (
    <div>
      <div className="overflow-x-auto py-6">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Query Email</th>
              <th>Product Name</th>
              <th>Image</th>
              <th>Recommender Email</th>
              <th>Recommended Product</th>
            </tr>
          </thead>
          <tbody>
            {myRecommend.map((reco, idx) => (
              <tr reco={reco} key={reco._id}>
                <th>{idx + 1}</th>
                <td>{reco.userInfo.email}</td>
                <td>{reco.name}</td>
                <td>
                  <img
                    className="w-10 h-10 rounded-full"
                    src={reco.photo}
                    alt=""
                  />
                </td>
                <td>
                  {recommender.map((recommend) => (
                    <li recommend={recommend} key={recommend._id}>
                      {recommend.recommender_email}
                    </li>
                  ))}
                </td>
                <td>
                  {recommender.map((recommend) => (
                    <li recommend={recommend} key={recommend._id}>
                      {recommend.product_name}
                    </li>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Recommendations;
