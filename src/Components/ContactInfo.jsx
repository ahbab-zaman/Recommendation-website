import { div } from "framer-motion/client";

const ContactInfo = ({ icon, title }) => {
  return (
    <div>
      <div className="flex lg:flex-row flex-col justify-between items-center gap-6">
        <div className="flex flex-col justify-center items-center py-4 px-8 space-y-4 lg:border-r-2 border-none lg:border-l-2 ">
          <div className="text-3xl">{icon}</div>
          <p className="font-semibold">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
