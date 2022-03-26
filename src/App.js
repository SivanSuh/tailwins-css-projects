import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import SocialMedia from "./components/SocialMedia/SocialMedia";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import YolculugaBasla from "./components/YolculugaBasla/YolculugaBasla";
import Calısmalarımız from "./components/Calısmalarımız/Calısmalarımız";
import DropDown from "./components/Navbar/DropDown";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleButton = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", hideMenu);
  });
  return (
    <BrowserRouter>
      <div className="mx-auto">
        <div className="">
          <Navbar toggleButton={toggleButton} />
          <DropDown isOpen={isOpen} toggleButton={toggleButton} />
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
