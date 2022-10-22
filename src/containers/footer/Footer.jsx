import React from 'react';
import gpt3Logo from '../../logo.svg';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    {/* <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future before others</h1>
    </div>

    <div className="gpt3__footer-btn">
      <p>Request Early Access</p>
    </div> */}

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
      </div>
      <div className="gpt3__footer-links_div">
        <h3>Links</h3>
        <p>Twitter</p>
        <p>Instagram</p>
        <p>Discord</p>
      </div>

      <div className="gpt3__footer-links_div">
        <h3>Get in touch</h3>
        <p>fleek.network@gmail.com</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2022 Fleek Network. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
