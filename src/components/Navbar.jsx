import logo from "../assets/kobedimeLogo.png";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6 mr-9">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx2" src={logo} alt="logo" style={{ width: '130px' }} />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/sean-kobe-dime-b6a829230/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-violet-500"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/KobeDime"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-violet-500"
        >
          <FaGithub />
        </a>
        <a
          href="https://x.com/kobeatom_"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-violet-500"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.instagram.com/ohitskobe_/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-violet-500"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
