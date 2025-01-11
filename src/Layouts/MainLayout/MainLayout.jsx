import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const MainLayout = () => {
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div className="min-h-screen pt-14 pb-10">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
