import { Link, Navigate, useLocation } from "react-router-dom";
import { Submitted } from "../RootPage/Form";
const SubmittedPage = () => {
  const data = useLocation();

  const state: Submitted = data.state;
  if (!state?.submit) {
    return <Navigate to="/" />;
  }
  return (
    <main className="flex items-center justify-center w-screen h-screen bg-color1">
      <div className="relative p-12 mx-auto border border-none bg-boxColor rounded-2xl ">
        <p className="text-2xl text-white">
          Congratulations, you succesfully signed up!
        </p>
        <Link
          className="flex justify-center p-4 text-lg italic transition-colors duration-300 opacity-50 text-color2 hover:text-slate-950"
          to="/"
        >
          Come back to Home Page
        </Link>
      </div>
    </main>
  );
};
export default SubmittedPage;
