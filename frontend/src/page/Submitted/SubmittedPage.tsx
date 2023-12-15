import { Link, Navigate, useLocation } from "react-router-dom";
import { Submitted } from "../RootPage/Form";
const SubmittedPage = () => {
  const data = useLocation();

  const state: Submitted = data.state;
  if (!state?.submit) {
    return <Navigate to="/" />;
  }
  return (
    <main className="flex items-center justify-center w-screen h-screen p-4 bg-color1">
      <div className="relative p-12 mx-auto border border-none bg-boxColor rounded-2xl ">
        <p className="text-xl text-center text-white md:text-2xl">
          Congratulations, you succesfully signed up!
        </p>
        <Link
          className="flex justify-center p-4 text-base italic transition-colors duration-300 opacity-50 md:text-lg text-color2 hover:text-slate-950"
          to="/"
        >
          Come back to Home Page
        </Link>
      </div>
    </main>
  );
};
export default SubmittedPage;
