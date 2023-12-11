import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="flex flex-col items-center justify-center w-screen h-screen gap-3 bg-color1">
      <p className="text-4xl font-bold text-white ">This page do not exist!</p>
      <Link
        className="text-lg transition-colors duration-300 opacity-50 text-slate-800 hover:text-slate-950"
        to="/"
      >
        Comeback to Home Page
      </Link>
    </main>
  );
};
export default NotFound;
