import React from 'react';
import Article from '../../components/article/Article';
import { blog01 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      {/* <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1> */}
      <h1 className="gradient__text">Meet our Team</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog01} date="Sep 26, 2021" text="MEMBER1" />
        <Article imgUrl={blog01} date="Sep 26, 2021" text="MEMBER1" />
        <Article imgUrl={blog01} date="Sep 26, 2021" text="MEMBER1" />
      </div>
    </div>
  </div>
);

export default Blog;
