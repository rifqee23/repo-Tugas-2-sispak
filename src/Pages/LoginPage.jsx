import FormInput from "@/components/organisms/FormInput";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useAuthStore from "@/utils/authStore";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const head = [
  { label: "Username", type: "text", name: "username" },
  { label: "Password", type: "password", name: "password" },
];
const LoginPage = () => {
  const navigate = useNavigate();
  const [inputValues, setInputValues] = useState({});
  const loginUser = useAuthStore((state) => state.loginUser);
  const [error, setError] = useState("");

  const handleChange = (event, fieldName) => {
    setInputValues({ ...inputValues, [fieldName]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { username, password } = inputValues;

    try {
      // Mengirim request ke API login
      const response = await axios.post(
        "http://localhost:3000/api/auth/login",
        {
          username,
          password,
        }
      );

      if (response.data.message === "Login successfully") {
        const token = response.data.data.token;
        Cookies.set("access_token", token, { expires: 1 });
        loginUser(token);
        navigate("/");
      } else {
        setError("Login gagal. Cek kembali username atau password.");
      }
    } catch (err) {
      setError(err.message);
    }
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
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
      </div>
    </>
  );
};

export default LoginPage;
