import React from "react";
import { Link } from "react-router-dom";

import { ImMenu } from "react-icons/im";
const Navbar = ({ toggleButton }) => {
  return (
    <div
      style={{ height: "110px" }}
      className="flex justify-between h-28 items-center mx-auto w-10/12"
    >
      <div>
        <Link to="/">
          <img
            style={{ width: "167.55px", height: "37.94px" }}
            src="https://next-js-redux-virid.vercel.app/Logo.png"
            alt="logo"
          />
        </Link>
      </div>
      <div
        className="px-4 cursor-pointer lg:hidden text-3xl"
        onClick={toggleButton}
      >
        <ImMenu />
      </div>
      <div className="font-bold  lg:flex hidden">
        <Link className=" mx-2" to="/">
          <h2>HAKKIMIZDA</h2>
        </Link>
        <Link className=" mx-2" to="/foto">
          <h2>ÇALIŞMALARIMIZ</h2>
        </Link>
        <Link className=" mx-2" to="/yolculuk">
          <h2>YOLCULUGA BAŞLA</h2>
        </Link>
        <Link className=" mx-2" to="/iletisim">
          <h2>İLETİŞİM</h2>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
