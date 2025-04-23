import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import loginAnimation from "./profile.json";
import googleImg from "../../assets/google.png";
import { auth } from "../../Firebase/Firebase.init";
import Lottie from "lottie-react";
import Loading from "../Loading/Loading";

const Login = () => {
  const { user, setUser, userSignIn, loading } = useContext(AuthContext);
  if (loading) return <Loading></Loading>;
  const location = useLocation();
  const navigation = useNavigate();
  const provider = new GoogleAuthProvider();
  const googleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        navigate("/");
      })
      .catch((error) => {
        console.log("Invalid User", error.code);
      });
  };

  const navigate = useNavigate();
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    userSignIn(email, password)
      .then((res) => {
        setUser(res.user);
        navigation(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error.code);
      });
  };
  return (
    <div>
      <div className="flex lg:flex-row flex-col-reverse justify-center items-center">
        <div className="hero w-full">
          <div className="hero-content w-full flex-col">
            <div className="card shrink-0 shadow-2x w-[90%] border mx-auto">
              <form onSubmit={handleLogin} className="card-body w-full mx-auto">
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
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="py-2 bg-[#EBF9F5] text-[#35B091] font-bold border-[1px] hover:border-[#35B091] rounded-xl">
                    Login
                  </button>
                </div>
                <div className="text-center text-lg font-bold">Or</div>

                <button
                  onClick={googleLogin}
                  className="form-control flex-row justify-center gap-4 items-center p-3 mt-2 border rounded-full"
                >
                  <div>
                    <img className="w-[30px]" src={googleImg} alt="" />
                  </div>
                  <div className="text-xl font-semibold">
                    Signin With Google
                  </div>
                </button>
                <div className="pt-4">
                  <p className="text-center font-semibold">
                    New to this account ?{" "}
                    <Link className="text-blue-500 link" to="/register">
                      Register
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 w-3/4 mx-auto">
          <Lottie
            classID="w-11/12"
            animationData={loginAnimation}
            loop={true}
          />
        </div>
      </div>
    </div>
  );
};
export default Login;
