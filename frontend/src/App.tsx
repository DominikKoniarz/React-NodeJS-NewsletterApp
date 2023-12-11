import Header from "./page/Header";
import HeaderIcon from "./page/HeaderIcon";
import Form from "./page/Form";
import Footer from "./page/Footer";

function App() {
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
}

export default App;
