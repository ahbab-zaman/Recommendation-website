import { Link } from "react-router-dom";
import icon from "../assets/icon (2).png";
import github from "../assets/github-sign.png";
import linkedin from "../assets/linkedin.png";
const Footer = () => {
  return (
    <footer className="footer bg-neutral text-neutral-content items-center p-4">
      <aside className="grid-flow-col items-center">
        <img className="w-12" src={icon} alt="" />
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved of{" "}
          <span className="text-yellow-400 font-semibold text-lg">
            Recommendo
          </span>
        </p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <Link to="https://github.com/ahbab-zaman">
          <img className="w-12" src={github} alt="" />
        </Link>
        <Link to="https://www.facebook.com/profile.php?id=100015172482884&mibextid=ZbWKwL">
          <img className="w-12" src={linkedin} alt="" />
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
