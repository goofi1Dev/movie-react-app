import React from "react";
import "../../css/home.css";
import { homeComponent } from "../../homeComponents/homeComponent";
import bar from "../../img/hellowen.jpg";

const Home = () => {
  return (
    <div>
      <div className="Spline_1">
        <img src={bar} alt="img" />
      </div>
      <homeComponent.Bar />
      <homeComponent.Main />
    </div>
  );
};

export default Home;
