import React from "react";
import { FaRegCopy, FaCopy } from "react-icons/fa6";

const ButtonCopyToClipboard = ({ buttonName = "Copy", text, onBtnClick }) => {
  /**
   * Button with specific design: copy
   * @param text: text to be copied
   * @param onBtnCklick: regular onBtnClick
   */

  const copyText = async () => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.error("Copy went wrong", err);
    }
  };

  return (
    <div>
      <button
        className="group flex items-center gap-2 px-4 py-2 rounded-full text-white bg-gradient-to-r from-[#0F6CBD] to-blue-900 hover:brightness-75 transition-all duration-300"
        onClick={() => {
          copyText(), onBtnClick();
        }}
      >
        <FaCopy
          size={24}
          className="group-hover:hidden transition-all duration-300"
        />
        <FaRegCopy
          size={24}
          className="hidden group-hover:inline transition-all duration-300"
        />
        {buttonName}
      </button>
    </div>
  );
};
export default ButtonCopyToClipboard;
