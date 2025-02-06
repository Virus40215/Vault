import React from "react";
import { IoAdd } from "react-icons/io5";

const ButtonCreate = ({ buttonName = "Create", onBtnClick }) => {
  /**
   * Button with specific design: create
   */
  return (
    <div>
      <button
        className="flex items-center gap-2 px-4 py-2 rounded-full text-white bg-gradient-to-r from-[#0F6CBD] to-blue-900 hover:brightness-75 transition-all duration-300"
        onClick={onBtnClick}
      >
        <IoAdd size={24} color="white" />
        {buttonName}
      </button>
    </div>
  );
};
export default ButtonCreate;
