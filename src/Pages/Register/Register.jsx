import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
  const { user, userRegister } = useContext(AuthContext);
  const navigate = useNavigate();

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
        navigate('/')
      })
      .catch((error) => {
        console.log(error.code);
      });
  };

  return (
    <div>
      <div className="py-4">
        <h2 className="text-3xl text-center font-semibold">Registration</h2>
      </div>

      <div>
        <div className="hero">
          <div className="hero-content w-full flex-col">
            <div className="card shrink-0 shadow-2x w-3/4 border mx-auto">
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
                <div className="form-control mt-6">
                  <button className="btn bg-[#1c1c1ccd] text-[#fff] font-semibold">
                    Register
                  </button>
                </div>
                <div className="py-4">
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
      </div>
    </div>
  );
};

export default Register;
