import React from "react";
import LoginForm from "../organisms/LoginForm";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-blue-gray-800 p-4">
      <Card className="mt-4 h-auto w-96">
        <CardBody>
          <Typography color="blue-gray" variant="h5" className="mb-5">
            Login
          </Typography>
          <LoginForm />
          <Link to={"/register"}>
            <Typography
              variant="paragraph"
              className="cursor-pointer hover:underline"
            >
              Tidak Punya akun?
            </Typography>
          </Link>
        </CardBody>
      </Card>
    </div>
  );
};

export default LoginPage;
