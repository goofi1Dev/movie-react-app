import React from "react";
import { appPage } from "../../../App/Page/appPage";
import video from "../../../video/video2.mp4";
import { useAppContext } from "../../../context/AppContextProvider";
import "../../../css/home.css";

const Bar = () => {
  const {
    state: { isUserAuthenticated },
  } = useAppContext();
  return (
    <div>
      <div className="bar">
        <div className="banner">
          <h1>
            The <br />
            Movie <br />
            Tracker
          </h1>
          {!isUserAuthenticated ? (
            <div>
              <div>
                <appPage.SignIn />
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="video">
          <video controls autoPlay>
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default Bar;
