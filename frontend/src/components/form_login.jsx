import FormBase from "./bases/form_base";
import InputNormal from "./ui_elements/input_normal";

const FormLogin = ({ emailValue, setEmailValue , passwordValue, setPasswordValue }) => {




  return (
    <div className="">
      <FormBase>
        <p className="relative font-bold text-5xl p- inline-block after:block after:h-1 after:w-full after:bg-gradient-to-r after:from-[#0F6CBD] after:to-blue-900 after:absolute after:left-0 after:bottom-[-8px]">
          Login
        </p>
        <InputNormal label="E-Mail Adresse" inputValue={emailValue} onInputChange={setEmailValue} />
        <InputNormal type="password" label="Passwort" inputValue={passwordValue} onInputChange={setPasswordValue} />
      </FormBase>
    </div>
  );
};

export default FormLogin;
