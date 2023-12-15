import React from "react";
import "../../../css/homeMain.css";
// import {
//   Animator,
//   FadeIn,
//   MoveOut,
//   ScrollContainer,
//   ScrollPage,
//   StickyIn,
//   ZoomIn,
//   batch,
// } from "react-scroll-motion";
import film from "../../../../img/film.jpg";
import "../../../../css/main.css";

const Main = () => {
  return (
    <main>
      <h1 className="border-2"> ABOUT US</h1>
      <div className="badge-info">
        <div>
          <h3>
            Support corporate clients and <br />
            financial investors with their growth strategy and international
            development.
          </h3>
          <h3>
            ConsultUs’ core expertise lies in the ability to support our clients
            in
            <br /> understanding, analysing and executing commercial and
            investment
            <br />
            strategies in specific markets.
          </h3>
          <h3>
            A <b>film</b> – also called a <b>movie</b>, <b>motion picture</b>,
            <br />
            <b>moving picture</b>, <b>picture</b>, <b>photoplay</b> or (slang)
            <br />
            <b>flick</b> – is a work of visual art that simulates experiences
            <br />
            and otherwise communicates ideas, stories, perceptions, feelings,
            <br />
            beauty, or atmosphere through the use of moving images. These images
            <br />
            are generally accompanied by sound and, more rarely, other sensory
            <br />
            stimulations. The word "<b>cinema</b>", short for cinematography ,
            <br />
            is often used to refer to filmmaking and the try film industry , and
            the art form that is the result of it.
          </h3>
        </div>
        <div>
          <img src={film} alt="img" />
        </div>
      </div>
    </main>
  );
};

export default Main;
