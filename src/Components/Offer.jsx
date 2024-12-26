import { FaTruckFast } from "react-icons/fa6";
import { TbTruckReturn } from "react-icons/tb";
import { FaUserShield } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
const Offer = () => {
  return (
    <div className="py-8">
      <div className="p-4 text-center">
        <h4 className="text-3xl font-semibold">See What We Offer</h4>
        <p className="font-semibold">These are support by our team members</p>
      </div>
      <div className="bg-[#2B3440] py-12 px-4 text-white">
        <div className="flex lg:flex-nowrap flex-wrap justify-between items-center gap-6 mx-auto w-11/12">
          <div className="flex items-center gap-3">
            <span>
              <FaTruckFast className="text-[50px]"></FaTruckFast>
            </span>
            <div>
              <h4 className="text-lg font-bold">Free Shipping</h4>
              <p className="font-extralight">On all orders over $75.00</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span>
              <TbTruckReturn className="text-[50px]"></TbTruckReturn>
            </span>
            <div>
              <h4 className="text-lg font-bold">Free Return</h4>
              <p className="font-extralight">Returns are free within 9 days</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span>
              <FaUserShield className="text-[50px]"></FaUserShield>
            </span>
            <div>
              <h4 className="text-lg font-bold">Support 24/7</h4>
              <p className="font-extralight">Contact us 24 hours a day</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span>
              <MdPayment className="text-[50px]"></MdPayment>
            </span>
            <div>
              <h4 className="text-lg font-bold">100% payment secure</h4>
              <p className="font-extralight">Your payment are safe with us.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
