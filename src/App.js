import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPages";
import "./Assets/img/style.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </>
  );
}

export default App;
