import React, { useState } from "react";
import { signUp } from "../../api/auth";
import { BeatLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import routes from "../../constants/routes";
import "../../components/css/signUpForm.css";

const SignUpForm = () => {
  const navigate = useNavigate();
  const [userAuthError, setUserAuthError] = useState();
  const [user, setUser] = useState({
    UserName: "",
    Password: "",
    Email: "",
  });
  console.log(user);

  const [isLoading, setIsLoading] = useState(false);

  const clickHandler = () => {
    setIsLoading(true);
    signUp(user)
      .then(() => {
        navigate(routes.signin, { state: { success: true } });
      })
      .catch((err) => {
        setUserAuthError(err);
      });
  };

  return (
    <div>
      {userAuthError ? (
        <div>
          <div class="alert alert-danger">
            <strong>Danger!</strong> this acount already exsist please try
            diferent Password/Email
            <button
              style={{ margin: "10px" }}
              class="btn btn-secondary"
              variant="success"
              onClick={() => {
                navigate(routes.signin);
              }}
            >
              Sign In
            </button>
          </div>

          <div className="badge-success">
            <h1 style={{ color: "white" }}>SignUp</h1>
            <div>
              <input
                onChange={(e) => {
                  setUser((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }));
                }}
                name="userName"
                placeholder="Enter your Username"
              />
            </div>
            <div>
              <input
                onChange={(e) => {
                  setUser((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }));
                }}
                name="email"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <input
                onChange={(e) => {
                  setUser((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }));
                }}
                name="password"
                placeholder="Enter your password"
              />
            </div>
            <div>
              <button className="signInButton" onClick={clickHandler}>
                <span class="button_top"> Sign in </span>
              </button>
            </div>
            <div>
              <span>Sign in here :</span>
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
        </div>
      ) : (
        <div className="badge-success">
          <h1 style={{ color: "white" }}>SignUp</h1>
          <div>
            <input
              onChange={(e) => {
                setUser((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }));
              }}
              name="userName"
              placeholder="Enter your Username"
            />
          </div>
          <div>
            <input
              onChange={(e) => {
                setUser((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }));
              }}
              name="email"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <input
              onChange={(e) => {
                setUser((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }));
              }}
              name="password"
              placeholder="Enter your password"
            />
          </div>
          <div>
            <button className="signInButton" onClick={clickHandler}>
              <span class="button_top"> Sign in </span>
            </button>
          </div>
          {isLoading && <BeatLoader />}
          <div>
            <span>Sign in here :</span>
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
      )}
    </div>
  );
};

export default SignUpForm;
