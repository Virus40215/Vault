import { useState } from "react";
import FormLogin from "../../components/form_login";
import ButtonLogin from "../../components/ui_elements/button_login";
import { postRequest } from "../../apis/post_request";
import { useAuth } from "../../utils/auth_provider";

const Login = () => {
  const [usernameValue, setUsernameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const { login } = useAuth();

  async function handleLogin() {
    const loginData = {
      username: usernameValue,
      password: passwordValue,
    };

    const response = await postRequest(loginData, "login");
    if (response?.success) {
      login();
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col w-100">
        <FormLogin
          usernamelValue={usernameValue}
          setUsernameValue={setUsernameValue}
          passwordValue={passwordValue}
          setPasswordValue={setPasswordValue}
        />
        <ButtonLogin buttonName="Anmelden" onBtnClick={handleLogin} />
      </div>
    </div>
  );
};

export default Login;
