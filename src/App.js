import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import SocialMedia from "./components/SocialMedia/SocialMedia";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import YolculugaBasla from "./components/YolculugaBasla/YolculugaBasla";
import Calısmalarımız from "./components/Calısmalarımız/Calısmalarımız";

function App() {
  return (
    <BrowserRouter>
      <div className="mx-auto">
        <div className="">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        <Routes>
          <Route path="/yolculuk" element={<YolculugaBasla />} />
          <Route path="/foto" element={<Calısmalarımız />} />
        </Routes>
        <div className="md:absolute md:top-64 md:left-4 relative   bottom-0">
          <Routes>
            <Route path="/" element={<SocialMedia />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
