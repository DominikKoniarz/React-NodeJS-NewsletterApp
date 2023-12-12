import Header from "./Header";
import HeaderIcon from "./HeaderIcon";
import Form from "./Form";
import Footer from "./Footer";
import { useState } from "react";

const RootPage = () => {
  const [fetchError, setFetchError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <main className="flex items-center justify-center w-screen h-screen bg-color1">
      <div className="relative p-10 mx-auto border border-none bg-boxColor rounded-2xl ">
        {!isLoading ? (
          <>
            <HeaderIcon />
            <Header />
            <Form
              setIsLoading={setIsLoading}
              fetchError={fetchError}
              setFetchError={setFetchError}
            />
            <Footer />
          </>
        ) : (
          <div className="grid w-20 h-20 place-items-center">
            <div className="w-full h-full border-[12px] rounded-full border-cyan-600 border-t-slate-200 animate-spin"></div>
          </div>
        )}
      </div>
    </main>
  );
};
export default RootPage;
