import { useState } from "react";
import FormLogin from "../../components/form_login";
import ButtonLogin from "../../components/ui_elements/button_login";

const Login = () => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");


  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col w-100">
        
        <FormLogin 
              emailValue={emailValue}
              setEmailValue={setEmailValue}
              passwordValue={passwordValue}
              setPasswordValue={setPasswordValue}/>
        <ButtonLogin buttonName="Anmelden"/>
      </div>
    </div>
  );
};

export default Login;
