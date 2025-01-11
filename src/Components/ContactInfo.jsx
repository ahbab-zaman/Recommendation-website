import { div } from "framer-motion/client";

const ContactInfo = ({ icon, title }) => {
  return (
    <div>
      <div className="flex lg:flex-row flex-col justify-between items-center gap-6">
        <div className="flex flex-col justify-center items-center py-4 px-8 space-y-4 border-r-2 border-l-2">
          <div>{icon}</div>
          <p>{title}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
