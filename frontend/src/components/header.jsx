import React from "react";
import GlobSearchInput from "./ui_elements/input_glob";

/**
 * TODO: DOCU
 */

function Header({}) {
  return (
    <div className="flex justify-center items-center h-16 w-full fixed top-0 left-0 z-50">
      <GlobSearchInput />
    </div>
  );
}


export default Header;
