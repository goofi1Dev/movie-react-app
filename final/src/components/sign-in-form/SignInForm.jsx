import React, { useState } from "react";
import { signIn } from "../../api/auth";
import { RingLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import routes from "../../constants/routes";
import { useAppContext } from "../../context/AppContextProvider";
import { signInAction } from "../../context/action-creators";
import "../../css/signInForm.css";

const SignInForm = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    UserName: "",
    Password: "",
  });

  const { dispatch } = useAppContext();

  const [isLoading, setIsLoading] = useState(false);

  const clickHandler = () => {
    setIsLoading(true);
    signIn(user)
      .then((data) => {
        dispatch(signInAction(data.token));
        navigate(routes.movie);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="input-box">
      <h1>SIGN IN</h1>
      <div>
        <input
          onChange={(e) => {
            setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
          }}
          name="userName"
          placeholder="Enter your Username"
        />
      </div>
      <div>
        <input
          onChange={(e) => {
            setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
          }}
          name="password"
          placeholder="Enter your password"
        />
      </div>
      <div>
        <button className="signInButton" onClick={clickHandler}>
          <span class="button_top"> Sign in </span>
        </button>
        <div>
          <span>Sign up here :</span>
          <button
            className="cta"
            onClick={() => {
              navigate(routes.signup);
            }}
          >
            <span>Follow me</span>
            <svg viewBox="0 0 13 10" height="10px" width="15px">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </button>
        </div>
      </div>
      {isLoading && <RingLoader color="black" />}
    </div>
  );
};

export default SignInForm;
