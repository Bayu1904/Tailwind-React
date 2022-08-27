import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPages";
import "./Assets/img/style.css";
import Product from "./pages/Products";
import Detail from "./pages/Details";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/ListProduct" element={<Product />} />
        <Route path="/Detail/:id" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;
