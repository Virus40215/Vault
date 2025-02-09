import React from "react";
import { CiLogin } from "react-icons/ci";
import { IoLogIn } from "react-icons/io5";

const ButtonLogin = ({ buttonName = "Login", onBtnClick }) => {
  /**
   * Button with specific design: Login
   */

  return (
    <div>
      <button
        className="group flex items-center justify-center w-full gap-2 px-4 py-2 rounded-full text-white bg-gradient-to-r from-[#0F6CBD] to-blue-900 hover:brightness-75 transition-all duration-300"
        onClick={onBtnClick}
      >
        <span className="group-hover:hidden transition-all duration-300">
          <CiLogin size={24} />
        </span>
        <span className="hidden group-hover:inline transition-all duration-300">
          <IoLogIn size={24} />
        </span>
        {buttonName}
      </button>
    </div>
  );
};
export default ButtonLogin;
