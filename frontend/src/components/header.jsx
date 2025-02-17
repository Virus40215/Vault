import React, { useContext } from "react";
import GlobSearchInput from "./ui_elements/input_glob";
import UserLogo from "./user_logo";
import { AuthContext } from "../utils/auth_context";
import logo from "../img/logo.png";
import { IoMenuOutline } from "react-icons/io5";

/**
 * TODO: DOCU
 */

function Header({}) {
  const { user } = useContext(AuthContext);

  return (
    <div className="flex items-center justify-between w-full ">
      <div className="flex items-center gap-4">
        <IoMenuOutline size={23} color="#6A7282"/>
        <img src={logo} alt="Logo" width="70" height="70" />
      </div>

      <GlobSearchInput />
      <div>
        <UserLogo user={user.username} />
      </div>
    </div>
  );
}

export default Header;
