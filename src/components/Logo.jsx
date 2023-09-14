import { Link } from "react-router-dom";
import logo from "../assets/tv.svg";

const Logo = ({color}) => {
  return (
    <Link to="/" className="flex gap-5 items-center">
      <img src={logo} alt="Logo" />
      <h2
        className={`text-${color} font-dm text-2xl font-bold leading-normal sm:inline-block`}
      >
        MovieBox
      </h2>
    </Link>
  );
};

export default Logo;
