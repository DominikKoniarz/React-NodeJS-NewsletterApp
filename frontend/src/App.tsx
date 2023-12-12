import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootPage from "./page/RootPage/RootPage";
import NotFound from "./page/404/NotFound";
import SubmittedPage from "./page/Submitted/SubmittedPage";
import Unsign from "./page/UnsignPage/Unsign";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootPage />} />
        <Route path="/submitted" element={<SubmittedPage />} />
        <Route path="/unsign" element={<Unsign />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
