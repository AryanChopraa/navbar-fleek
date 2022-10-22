import React from 'react';
import './features.css';
import Article from '../../components/article/Article';
import googlestore from '../../assets/googlestore.png';

const Features = () => (
  // <div className="gpt3__features section__padding" id="features">
  <div className="section__padding">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={googlestore} date="Sep 26, 2021" text="MEMBER1" />
        <Article imgUrl={googlestore} date="Sep 26, 2021" text="MEMBER1" />
        <Article imgUrl={googlestore} date="Sep 26, 2021" text="MEMBER1" />
      </div>
    </div>
  </div>
);

export default Features;
