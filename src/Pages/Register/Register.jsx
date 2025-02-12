import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import signupAnimation from "./Animation - 1739359430069.json";
import Lottie from "lottie-react";
import Loading from "../Loading/Loading";
const Register = () => {
  const { user, userRegister, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  if (loading) return <Loading></Loading>;
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    userRegister(email, password)
      .then((res) => {
        console.log(res.user);
        navigate("/");
      })
      .catch((error) => {
        console.log(error.code);
      });
  };

  return (
    <div>
      <div className="flex lg:flex-row flex-col-reverse justify-center items-center">
        <div className="hero lg:w-3/4 w-11/12 mx-auto">
          <div className="hero-content w-full flex-col">
            <div className="card shrink-0 shadow-2x w-11/12 border mx-auto">
              <form
                onSubmit={handleRegister}
                className="card-body w-full mx-auto"
              >
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    name="photo"
                    placeholder="Enter your image URL"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Create Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-4">
                  <button className="btn bg-neutral text-[#fff] font-semibold">
                    Register
                  </button>
                </div>
                <div className="pt-4">
                  <p className="text-center font-semibold">
                    Already have an account ?{" "}
                    <Link className="text-blue-500 link" to="/login">
                      Login
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 w-11/12 mx-auto">
          <Lottie animationData={signupAnimation} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default Register;
