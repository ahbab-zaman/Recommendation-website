import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import icon from "../assets/innovation.png";
import Loading from "../Pages/Loading/Loading";
import ThemeToggler from "./ThemeToggler";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const [showSidebar, setShowSidebar] = useState(false);

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
        className={`w-full mx-auto fixed top-0 z-10 transition-colors duration-300 font-semibold`}
      >
        <div className="w-full navbar justify-between mx-auto">
          <div className="navbar-start">
            {/* Sidebar */}
            <div className="lg:hidden">
              <button
                onClick={() => setShowSidebar(true)}
                className="btn btn-ghost"
              >
                {" "}
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
              </button>
              <div
                className={`fixed inset-0 z-40 bg-opacity-30 transition-opacity duration-300 sidebar ${
                  showSidebar ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
                onClick={() => setShowSidebar(false)}
              />
              <div
                className={`fixed top-0 left-0 z-50 h-full w-64 shadow-md transform transition-transform duration-300 ${
                  showSidebar ? "translate-x-0" : "-translate-x-full"
                }`}
              >
                {/* Close Button */}
                <div className="flex justify-end p-4">
                  <button onClick={() => setShowSidebar(false)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <ul className="menu p-4 space-y-2">
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
                      Contact Us
                    </Link>
                  </li>
                  <li className="lg:hidden flex">
                    <ThemeToggler />
                  </li>
                </ul>
              </div>
            </div>

            <img className="w-8 lg:flex hidden" src={icon} alt="" />
            <Link to="/" className="lg:text-xl text-lg font-bold ml-[4px]">
              Recommendo
            </Link>
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
            <div className="lg:flex hidden">
              <ThemeToggler />
            </div>
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
                        <Link
                          to="/recommendation"
                          className={`relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full px-3 py-2 rounded-md transition-all duration-300 ${
                            location.pathname === "/recommendation"
                              ? "bg-[#62D0B4] text-white font-bold"
                              : "font-bold"
                          }`}
                        >
                          Recommendation for me
                        </Link>
                      </li>
                    )}
                    {user && (
                      <li>
                        <Link
                          to="/myQueries"
                          className={`relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full px-3 py-2 rounded-md transition-all duration-300 ${
                            location.pathname === "/myQueries"
                              ? "bg-[#62D0B4] text-white font-bold"
                              : "font-bold"
                          }`}
                        >
                          My Queries
                        </Link>
                      </li>
                    )}
                    {user && (
                      <li>
                        <Link
                          to="/myRecommendation"
                          className={`relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full px-3 py-2 rounded-md transition-all duration-300 ${
                            location.pathname === "/myRecommendation"
                              ? "bg-[#62D0B4] text-white font-bold"
                              : "font-bold"
                          }`}
                        >
                          My Recommendation
                        </Link>
                      </li>
                    )}
                    {user && (
                      <div>
                        <Link to="/login" className="w-full">
                          <button
                            onClick={userSignOut}
                            className={`py-2 px-3 w-full hover:transition-all hover:shadow-xl hover:duration-500 rounded-xl bg-[#62D0B4] text-[#fff] font-bold`}
                          >
                            Logout
                          </button>
                        </Link>
                      </div>
                    )}
                  </ul>
                </div>
              </div>
            ) : (
              <Link to="/login">
                <button
                  className={`lg:px-6 px-3 py-2 hover:transition-all hover:shadow-xl hover:duration-500 rounded-full bg-[#62D0B4] text-[#fff] lg:text-base text-sm font-bold`}
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
