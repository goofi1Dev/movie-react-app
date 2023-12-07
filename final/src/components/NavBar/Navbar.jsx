import React from "react";
import { useNavigate } from "react-router-dom";
import routes from "../../constants/routes";
import "../../css/NavBar.css";
import { signOutAction } from "../../context/action-creators";
import { useAppContext } from "../../context/AppContextProvider";

const Navbar = () => {
  const navigate = useNavigate();
  const {
    state: { isUserAuthenticated, user },
    dispatch,
  } = useAppContext();
  return (
    <nav>
      {!isUserAuthenticated ? (
        <div className="flex-column">
          <div>
            <h1>
              The <br />
              Movie <br />
              Tracker
            </h1>
          </div>
          <div className="btn">
            <button
              className="NavBtn"
              onClick={() => {
                navigate(routes.home);
              }}
            >
              Home
            </button>
            <button
              className="NavBtn"
              onClick={() => {
                navigate(routes.movie);
              }}
            >
              Movie
            </button>
            <button
              className="NavBtn"
              onClick={() => {
                navigate(routes.signin);
              }}
            >
              SIGN IN
            </button>
            <button
              className="NavBtn"
              onClick={() => {
                navigate(routes.signup);
              }}
            >
              SIGN UP
            </button>
          </div>
        </div>
      ) : (
        <div className="flex-column">
          <div className="flex-grow-0">
            <div>
              <h1>
                The <br />
                Movie <br />
                Tracker
              </h1>
            </div>
            <div className="btn">
              <button
                className="NavBtn"
                onClick={() => {
                  navigate(routes.home);
                }}
              >
                Home
              </button>
              <button
                className="NavBtn"
                onClick={() => {
                  navigate(routes.movie);
                }}
              >
                Movie
              </button>
            </div>
          </div>
          <div>
            <div style={{ display: "flex", alignItems: "baseline" }}>
              <div style={{ display: "flex", alignItems: "baseline" }}>
                <span style={{ cursor: "none" }} className="userName">
                  HI
                </span>
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    navigate(routes.profile);
                  }}
                  className="userName"
                >
                  {user.userName}
                </span>
              </div>
              <div>
                <button
                  className="NavBtn"
                  onClick={() => {
                    dispatch(signOutAction());
                  }}
                >
                  Sign out
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
