const Login = () => {
  return (
    <div className="hero">
      <div className="hero-content w-3/4 mx-auto flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left flex-1">
          <Lottie
            className="w-3/4 mx-auto"
            animationData={loginAnimation}
            loop={true}
          ></Lottie>
        </div>
        <div className="card bg-base-100 flex-1 shrink-0 shadow-2xl mx-auto w-full">
          <h1
            className="text-5xl font-semibold text-center py-2
            "
          >
            Login now!
          </h1>
          <form className="card-body w-full">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
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
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
