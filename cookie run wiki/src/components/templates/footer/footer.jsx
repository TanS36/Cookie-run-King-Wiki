import React from "react";
import { Link } from "react-router-dom";
import { FaYoutube, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "./footer.module.css";

function Footer() {
  return (
    <footer>
      <div className="information">
        <div className="media">
          <a href="https://www.youtube.com/@CookieRunKingdom"><FaYoutube /></a>
          <a href="https://www.facebook.com/CRKingdomEN/"><FaFacebook /></a>
          <a href="https://twitter.com/CRKingdomEN"><FaTwitter /></a>
          <a href="https://www.instagram.com/cookierunkingdom/"><FaInstagram /></a>
        </div>
        <div className="buttons">
          <button className="Terns">Terms of Service</button>
          <button className="Terns">Privacy Policy</button>
          <button className="Terns">FAQ & Support</button>
        </div>
        <div className="Corp">
          <div className="text">
            <p>This is a wiki site about</p>
            <p>the game "Cookie run Kingdom"</p>
            <p>All rights are with Devsisters Corp</p>
          </div>
          <p id="NameComp">DEVSISTERS</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
