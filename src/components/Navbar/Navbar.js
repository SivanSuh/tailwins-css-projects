import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div style={{ height: "110px" }} className="mx-auto w-10/12 ">
      <div className="flex justify-between h-28 items-center">
        <div>
          <img
            style={{ width: "167.55px", height: "37.94px" }}
            src="https://next-js-redux-virid.vercel.app/Logo.png"
            alt="logo"
          />
        </div>
        <div className="flex items-center space-x-4 font-bold">
          <div>
            <Link className="Link" to="/">
              <h2>HAKKIMIZDA</h2>
            </Link>
          </div>
          <div>
            <Link className="Link" to="/foto">
              <h2>ÇALIŞMALARIMIZ</h2>
            </Link>
          </div>
          <div>
            <Link className="Link" to="/yolculuk">
              <h2>YOLCULUGA BAŞLA</h2>
            </Link>
          </div>
          <div>
            <Link className="Link" to="/iletisim">
              <h2>İLETİŞİM</h2>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
