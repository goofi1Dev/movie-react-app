import React from "react";
import "../../../components/css/profileSection.css";
import { useAppContext } from "../../../context/AppContextProvider";
import Main from "../home/main/Main";

const Section = () => {
  const {
    state: { user },
  } = useAppContext();
  return (
    <div>
      <div className="profile">
        <div>
          <h1 style={{ textAlign: "center" }}>PROFILE INFORMATION</h1>
          <h2> User Name : {user.userName}</h2>
          <h2> User Email : {user.email}</h2>
        </div>
      </div>
      <div>
        <Main />
      </div>
    </div>
  );
};

export default Section;
