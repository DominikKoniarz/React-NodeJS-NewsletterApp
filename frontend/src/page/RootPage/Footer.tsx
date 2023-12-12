import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex justify-center p-2 mt-4 ">
      <div className="flex flex-col">
        <p className="text-base italic text-color2">
          Your email is safe with us, we don't spam
        </p>
        <div className="flex justify-center w-full">
          <Link
            to="/unsign"
            className="pt-5 text-red-500 transition-colors duration-300 hover:text-red-700 "
          >
            Unsign Here
          </Link>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
