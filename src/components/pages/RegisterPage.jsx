import React from "react";
import RegisterForm from "../organisms/RegisterForm";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-blue-gray-800">
      <Card className="mt-16 h-auto w-96">
        <CardBody>
          <Typography color="blue-gray" variant="h5" className="mb-5">
            Register
          </Typography>
          <RegisterForm />
          <Link to={"/login"}>
            <Typography
              variant="paragraph"
              className="cursor-pointer hover:underline"
            >
              Punya akun?
            </Typography>
          </Link>
        </CardBody>
      </Card>
    </div>
  );
};

export default RegisterPage;
