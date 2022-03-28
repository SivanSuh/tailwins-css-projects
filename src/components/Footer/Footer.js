import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="max-w-screen w-full d-flex justify-center items-center ">
      <div className="bg-black mt-72 text-white">
        <div style={{ height: "110px" }} className="mx-auto">
          <div className="mx-auto flex justify-between h-28 items-center w-10/12">
            <div>
              <img
                style={{
                  width: "167.55px",
                  height: "37.94px",
                }}
                className="bg-white"
                src="https://next-js-redux-virid.vercel.app/Logo.png"
                alt="logo"
              />
            </div>
            <div className="lg:flex items-center space-x-4 font-bold hidden ">
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
      </div>
    </div>
  );
};

export default Footer;
