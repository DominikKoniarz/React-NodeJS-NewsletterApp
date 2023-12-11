import Header from "./Header";
import HeaderIcon from "./HeaderIcon";
import Form from "./Form";
import Footer from "./Footer";

const RootPage = () => {
  return (
    <main className="flex items-center justify-center w-screen h-screen bg-color1">
      <div className="relative p-12 mx-auto border border-none bg-boxColor rounded-2xl ">
        <HeaderIcon />
        <Header />
        <Form />
        <Footer />
      </div>
    </main>
  );
};
export default RootPage;
