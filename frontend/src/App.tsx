import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootPage from "./page/RootPage/RootPage";
import NotFound from "./page/404/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
