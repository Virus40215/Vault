import React from "react";
import { FiUserPlus } from "react-icons/fi";
import { FaUserPlus } from "react-icons/fa6";

const ButtonRegister = ({ buttonName = "Register", onBtnClick }) => {
    /**
   * @param buttonName: Name of the button
   * @param onBtnClick: Add functionality
   */

  return (
    <div>
      <button
        className="group flex items-center justify-center w-full gap-2 px-4 py-2 rounded-full text-white bg-gradient-to-r from-[#0F6CBD] to-blue-900 hover:brightness-75 transition-all duration-300"
        onClick={onBtnClick}
      >
        <span className="group-hover:hidden transition-all duration-300">
          <FiUserPlus size={24}/> 
        </span>
        <span className="hidden group-hover:inline transition-all duration-300">
          <FaUserPlus size={24} />
        </span>
        {buttonName}
      </button>
    </div>
  );
};
export default ButtonRegister;


