import React from 'react';
import nike from '../../assets/nike3.png';
import googlestore from '../../assets/googlestore.png';
// import applestore from '../../assets/applestore.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Introducing Fleek Network a Social Space for your fitness face.</h1>
      <p>Earn crypto just by moving !</p>

      <div className="gpt3__header-content__input">
        <img src={googlestore} />
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={nike} />
    </div>
  </div>
);

export default Header;
