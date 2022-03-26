import React from "react";
import { Link } from "react-router-dom";

const DropDown = ({ isOpen }) => {
  return (
    <div
      className={
        isOpen
          ? "flex flex-col justify-center items-end text-start  bg-slate-900 text-white transition duration-150 ease-out z-10 fixed top-0 left-0 w-full h-full"
          : "hidden"
      }
    >
      <Link className="p-6 border-b-2 w-10/12" to={"/"}>
        Hakkımızda
      </Link>
      <Link className="p-6 border-b-2 w-10/12" to={"/foto"}>
        ÇALIŞMALARIMIZ
      </Link>
      <Link className="p-6 border-b-2 w-10/12" to={"/yolculuk"}>
        Yolculuga Basla
      </Link>
      <Link className="p-6 border-b-2 w-10/12" to={"/iletisim"}>
        İLETİŞİM
      </Link>
    </div>
  );
};

export default DropDown;
