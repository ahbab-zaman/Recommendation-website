import { useContext, useEffect, useRef, useState } from "react";
import Slide from "../../Components/Slide";
import myQuery from "../../assets/myQuery.avif"
import axios from "axios";
import { AuthContext } from "../../Provider/AuthProvider";
import MyQueryCard from "../../Components/MyQueryCard";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Loading from "../../Pages/Loading/Loading";
const MyQueries = () => {
  const [queries, setQueries] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [deleteQuery, setDeleteQuery] = useState(queries);
  const { user,loading } = useContext(AuthContext);
  useEffect(() => {
    const myQueries = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/allQuery/${user?.email}`,
          { withCredentials: true }
        );
        console.log(data);
        setDeleteQuery(data);
        setErrorMessage("");
      } catch (error) {
        if (error.response.status === 401) {
          setErrorMessage("No Queries Found");
        } else {
          console.log(error);
        }
      }
    };
    if (user) {
      myQueries();
    }
  }, [user]);
  
  if(loading) return <Loading></Loading> 
  return (
    <div className="space-y-2">
      <div className="px-6">
        <Slide
          image={myQuery}
          text={"Submit Your Query and let the community Recommend!"}
          button={"Add Queries"} link={"/addQuery"}
        ></Slide>
      </div>

      <div>
        {errorMessage ? (
          <div className="py-12 text-center">
            <p
              style={{
                color: "red",
                textAlign: "center",
                padding: "16px",
                paddingTop: "0px",
                fontSize: "32px",
                fontWeight: "bold",
              }}
            >
              {errorMessage}
            </p>
            <Link to="/addQuery">
              <button className="px-4 p-2 bg-[#2B3440] rounded-none text-white font-semibold">
                Add Query
              </button>
            </Link>
          </div>
        ) : (
          <div>
            {deleteQuery.length > 0 ? (
              <div className="w-3/5 text-center mx-auto py-6">
                <h2 className="text-4xl font-semibold">
                  Explore All My Queries
                </h2>
                <p>
                  Don’t hesitate to ask anything! Add your query here and
                  explore a world of insights, ideas, and personalized
                  recommendations from experts and peers alike."
                </p>
              </div>
            ) : (
              <div className="flex flex-col justify-center items-center">
                <h2 className="text-4xl font-bold text-center my-4">
                  No Query Added Yet
                </h2>
                <Link to="/addQuery">
                  <button className="px-4 py-2 bg-neutral text-white font-semibold">
                    Add Query
                  </button>
                </Link>
              </div>
            )}
            <div
              className={`w-11/12 mx-auto grid lg:grid-cols-4 grid-cols-1 py-6 gap-6`}
            >
              {deleteQuery.map((query) => (
                <MyQueryCard
                  deleteQuery={deleteQuery}
                  setDeleteQuery={setDeleteQuery}
                  query={query}
                  key={query._id}
                ></MyQueryCard>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyQueries;
