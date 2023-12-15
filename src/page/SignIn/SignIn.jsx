import React from "react";
import { useLocation } from "react-router-dom";
import SignInForm from "../../components/sign-in-form/SignInForm";

const SignIn = () => {
  const location = useLocation();
  return (
    <div>
      {location?.state?.success && <h1>you have registred successfully </h1>}
      <SignInForm />
    </div>
  );
};

export default SignIn;
