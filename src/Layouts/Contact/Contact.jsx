import { FaPhoneAlt } from "react-icons/fa";
import ContactInfo from "../../Components/ContactInfo";
import { FaEnvelope, FaLocationDot } from "react-icons/fa6";
import contact from "../../assets/contact.jpg";
import emailjs from "@emailjs/browser";
import { TbLocationFilled } from "react-icons/tb";
import { useContext, useRef } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Loading from "../../Pages/Loading/Loading";

const Contact = () => {
  const form = useRef();

  const handleSendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_qmo3ais", "template_3o42yf8", form.current, {
        publicKey: "cyXF2OtdeMME4QePo",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  const { loading } = useContext(AuthContext);

  if (loading) return <Loading></Loading>;

  return (
    <div>
      <div className="bg-aboutBanner bg-cover h-[250px] bg-no-repeat flex justify-start items-center">
        <h3 className="text-6xl font-bold px-4 text-white">CONTACT US</h3>
      </div>

      <div className="pt-12 grid lg:grid-cols-3 grid-cols-1 place-items-center w-11/12 mx-auto">
        <ContactInfo
          icon={<FaPhoneAlt></FaPhoneAlt>}
          title="01569118531"
        ></ContactInfo>
        <ContactInfo
          icon={<FaEnvelope></FaEnvelope>}
          title="ahbabtahmim@gmail.com"
        ></ContactInfo>
        <ContactInfo
          icon={<FaLocationDot></FaLocationDot>}
          title="Subid Bazar, Sylhet"
        ></ContactInfo>
      </div>

      <div className="bg-slate-100 mt-8">
        <div className="flex gap-5 mx-auto">
          <div className="w-full">
            <div className="flex lg:flex-row flex-col justify-center items-center">
              <div className="lg:w-1/2 w-11/12 mx-auto p-6">
                <h1 className="text-4xl font-semibold my-4">CONTACT US</h1>
                <form ref={form} onSubmit={handleSendEmail}>
                  <label className="form-control w-full">
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter Your Name"
                      className="bg-gray-100 p-3 rounded-lg w-full border-2"
                    />
                    <div className="label"></div>
                  </label>

                  <label className="form-control mt-3 w-full">
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter Your Email"
                      className="bg-gray-100 p-3 rounded-lg w-full border-2"
                    />
                    <div className="label"></div>
                  </label>

                  <label className="form-control mt-3 w-full">
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      className="bg-gray-100 p-3 rounded-lg w-ful border-2"
                    />
                    <div className="label"></div>
                  </label>

                  <textarea
                    className="textarea textarea-accent w-full resize-none bg-gray-100 p-3 rounded-lg border-2"
                    placeholder="Message"
                    name="message"
                  ></textarea>
                  <button className="flex items-center gap-2 bg-neutral px-4 py-2 text-white rounded-xl font-semibold">
                    Submit <TbLocationFilled></TbLocationFilled>
                  </button>
                </form>
              </div>
              <div className="lg:w-1/2 w-full mx-auto">
                <img className="w-full" src={contact} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
