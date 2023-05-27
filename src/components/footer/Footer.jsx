import React, { Fragment } from "react";

import { FaTwitter, FaDribbble, FaBehance } from "react-icons/fa";

import "./Footer.css";

const Footer = () => {
  return (
    <Fragment>
      <footer className="footer">
        <div className="footer__container container grid">
          <div className="footer__socials">
            <a href="" className="footer__social-link">
              <FaTwitter />
            </a>
            <a href="" className="footer__social-link">
              <FaDribbble />
            </a>
            <a href="" className="footer__social-link">
              <FaBehance />
            </a>
          </div>

          <p className="footer__copyright text-cs">
            &copy; 2023 <span>Pawan Bhatt</span>. All Rights Reserved
          </p>

          <p className="footer__copyright text-cs">
            Developed by <span>Pawan Bhatt</span>
          </p>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
