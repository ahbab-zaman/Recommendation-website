import { useContext, useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import icon from "../assets/innovation.png";
import Loading from "../Pages/Loading/Loading";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const { user, userSignOut, loading } = useContext(AuthContext);

  if (loading) return <Loading></Loading>;
  return (
    <>
      <nav
        className={`w-full fixed top-0 z-10 transition-colors duration-300  justify-center font-semibold  ${
          isScrolled ? "bg-base-100 text-black border-b-2" : "bg-transparent "
        }`}
      >
        <div className="w-11/12 navbar mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/queries">Queries</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About Us</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact Us</NavLink>
                </li>
              </ul>
            </div>
            <img className="w-8 lg:flex hidden" src={icon} alt="" />
            <a className="lg:text-xl text-lg font-bold ml-[4px]">Recommendo</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 space-x-3">
              <li>
                <Link
                  to="/"
                  className={`relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full px-3 py-2 rounded-md transition-all duration-300 ${
                    location.pathname === "/"
                      ? "bg-[#62D0B4] text-white font-bold"
                      : "font-bold"
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/queries"
                  className={`relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full px-3 py-2 rounded-md transition-all duration-300 ${
                    location.pathname === "/queries"
                      ? "bg-[#62D0B4] text-white font-bold"
                      : "font-bold"
                  }`}
                >
                  Queries
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={`relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full px-3 py-2 rounded-md transition-all duration-300 ${
                    location.pathname === "/about"
                      ? "bg-[#62D0B4] text-white font-bold"
                      : "font-bold"
                  }`}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={`relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full px-3 py-2 rounded-md transition-all duration-300 ${
                    location.pathname === "/contact"
                      ? "bg-[#62D0B4] text-white font-bold"
                      : "font-bold"
                  }`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            {user && (
              <div>
                <Link to="/login" className="w-full">
                  <button
                    onClick={userSignOut}
                    className={`px-6 p-2 hover:transition-all hover:shadow-xl hover:duration-500 rounded-full bg-[#62D0B4] text-[#fff] font-bold`}
                  >
                    Logout
                  </button>
                </Link>
              </div>
            )}
            {user ? (
              <div className="flex items-center gap-2">
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img alt="User Profile Image" src={user?.photoURL} />
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow space-y-2 text-black"
                  >
                    {user && (
                      <li>
                        <NavLink to={`/recommendation`}>
                          Recommendation for me
                        </NavLink>
                      </li>
                    )}
                    {user && (
                      <li>
                        <NavLink to="/myQueries">My Queries</NavLink>
                      </li>
                    )}
                    {user && (
                      <li>
                        <NavLink to="/myRecommendation">
                          My Recommendation
                        </NavLink>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            ) : (
              <Link to="/login">
                <button
                  className={`px-6 p-2 hover:transition-all hover:shadow-xl hover:duration-500 rounded-full bg-[#62D0B4] text-[#fff] font-bold`}
                >
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
