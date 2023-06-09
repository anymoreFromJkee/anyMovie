import React from "react";

import "./footer.scss";

import { Link } from "react-router-dom";

import bg from "../../assets/footer-bg.jpg";
import logo from "../../assets/tmovie.png";

export default function Footer() {
  return (
    <div className="footer" style={{ backgroundImage: `url(${bg})` }}>
      <div className="footer__content">
        <div className="footer__content_logo">
          <div className="logo">
            <img src={logo} alt="" />
            <Link to="/">anyMovie</Link>
          </div>
        </div>

    <div className="footer__content__menus">
      <div className="footer__content__menu">
        <Link to="/">Home</Link>
        <Link to="/">Contact us</Link>
        <Link to="/">Tearm of services</Link>
        <Link to="/">About us</Link>
      </div>
      <div className="footer__content__menu">
        <Link to="/">Live</Link>
        <Link to="/">FAQ</Link>
        <Link to="/">Premium</Link>
        <Link to="/">Privacy policy</Link>
      </div>
      <div className="footer__content__menu">
        <Link to="/">You must watch</Link>
        <Link to="/">Recent release</Link>
        <Link to="/">Top IMDB</Link>
      </div>
    </div>

      </div>
    </div>
  );
}
