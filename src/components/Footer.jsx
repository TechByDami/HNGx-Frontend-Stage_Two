import { Link } from "react-router-dom";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import instagram from "../assets/instagram.svg";
import youtube from "../assets/youtube.svg";

const Footer = () => {
  return (
    <footer className="min-w-[300px]">
      <div className="flex-col items-center gap-8 flex pt-[70px] pb-[20px]">
        <div className="items-center gap-12 inline-flex text-gray-900 text-lg font-bold">
          <Link to="#">
            <img
              className="hover:scale-110 transform transition-all"
              src={facebook}
              alt="facebook"
            />
          </Link>
          <Link className="hover:scale-110 transform transition-all" to="#">
            <img src={instagram} alt="instagram" />
          </Link>
          <Link className="hover:scale-110 transform transition-all" to="#">
            <img src={twitter} alt="twitter" />
          </Link>
          <Link className="hover:scale-110 transform transition-all" href="#">
            <img src={youtube} alt="youtube" />
          </Link>
        </div>
        <div className="gap-3 sm:gap-9 flex text-gray-900 text-sm sm:text-lg font-bold text-center">
          <Link className="hover:text-gray-500 transition-all" to="#">
            Conditions of Use
          </Link>
          <Link className="hover:text-gray-500 transition-all" to="#">
            Privacy & Policy
          </Link>
          <Link className="hover:text-gray-500 transition-all" to="#">
            Press Room
          </Link>
        </div>
        <div className="text-gray-500 text-base transition-all font-bold text-center">
          © 2023 MovieBox by{" "}
          <Link
            className="text-gray-400 text-lg font-bold hover:text-gray-800 transition-all hover:underline"
            to="https://www.linkedin.com/in/agboola-olawale-damilola-7b2132246/"
          >
            Agboola Olawale Damilola
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
