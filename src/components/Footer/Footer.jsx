import React from "react";
import "../css/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="card-footer">
        <ul>
          <li>About</li>
          <li>Stockists</li>
          <li>Contact</li>
        </ul>
        <h1>
          The <br />
          Movie <br />
          Tracker
        </h1>
        <p>Stay in touch</p>
        <div>
          <input placeholder="Enter your Email" />

          <button className="NavBtn">Subscribe</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
