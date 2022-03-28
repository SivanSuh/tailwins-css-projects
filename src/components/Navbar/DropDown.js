import React from "react";
import { Link } from "react-router-dom";
import { GrClose } from "react-icons/gr";
const DropDown = ({ isOpen, toggleButton }) => {
  return (
    <div
      className={
        isOpen
          ? "flex flex-col justify-center items-end text-start  bg-slate-900 text-white ease-out  z-10 fixed top-0 w-full h-full"
          : "hidden"
      }
      onClick={toggleButton}
    >
      <div
        className="bg-white text-2xl absolute top-12 right-20 cursor-pointer hover:text-3xl transition-all ease-in duration-300 hover:bg-red-600"
        onClick={!isOpen}
      >
        <GrClose />
      </div>
      <Link className="p-6 border-b-2 w-10/12" to="/">
        Hakkımızda
      </Link>
      <Link className="p-6 border-b-2 w-10/12" to="/foto">
        ÇALIŞMALARIMIZ
      </Link>
      <Link className="p-6 border-b-2 w-10/12" to="/yolculuk">
        Yolculuga Basla
      </Link>
      <Link className="p-6 border-b-2 w-10/12" to="/iletisim">
        İLETİŞİM
      </Link>
    </div>
  );
};

export default DropDown;
