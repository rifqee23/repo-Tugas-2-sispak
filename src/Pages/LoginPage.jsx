import FormInput from "@/components/organisms/FormInput";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useAuthStore from "@/utils/authStore";
import { useState } from "react";

const head = [
  { label: "Username", type: "text", name: "username" },
  { label: "Password", type: "password", name: "password" },
];
const LoginPage = () => {
  const navigate = useNavigate();

  const [inputValues, setInputValues] = useState({});

  const loginUser = useAuthStore((state) => state.loginUser);

  const handleChange = (event, fieldName) => {
    setInputValues({ ...inputValues, [fieldName]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const token = "your_access_token_here";
    loginUser(token);
    navigate("/");
  };
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-indigo-900">
        <div>
          <FormInput
            title={"Supply Chain"}
            input={head}
            onSubmit={handleSubmit}
            value={inputValues}
            onChange={handleChange}
            classCard={"py-10"}
            classTitle={"text-center text-slate-800 italic"}
            classButton={"w-full mx-8"}
            hideLabel={true}
            styleForm={"justify-center"}
            hideLogo={true}
          />
          <Link className="text-white ml-6 hover:underline-offset-1 hover:underline">
            Register Account?
          </Link>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
