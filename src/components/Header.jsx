import React from "react";
import icon from "../assets/icon.png";

const Header = () => {
  return (
    <div className="bg-primary px-2 py-1">
      <div className="flex items-center">
        <img src={icon} alt="" className="w-[50px] md:w-[60px] mx-2" />
        <h1 className="text-white font-bold text-2xl md:text-4xl">TO-DO LIST</h1>
      </div>
    </div>
  );
};

export default Header;
