import FormInput from "@/components/organisms/FormInput";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useAuthStore from "@/utils/authStore";

const head = [
  { label: "Username", type: "text", name: "username" },
  { label: "Password", type: "password", name: "password" },
];
const LoginPage = () => {
  const navigate = useNavigate();

  const loginUser = useAuthStore((state) => state.loginUser);

  const handleSubmit = (event) => {
    event.preventDefault();
    const token = "your_access_token_here";
    loginUser(token);
    navigate("/");
  };
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div>
          <FormInput
            title={"Login"}
            input={head}
            onSubmit={handleSubmit}
            value={""}
            onChange={""}
            classCard={"bg-transparent"}
            classTitle={"text-center"}
            classButton={"w-full mx-8 lg:ml-16"}
          />
          <Link className="text-blue-300 ml-6 hover:underline-offset-1 hover:underline">
            Register Account?
          </Link>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
