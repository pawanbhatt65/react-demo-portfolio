import React, { Fragment } from "react";
import { FaArrowRight } from "react-icons/fa";

// images
import Blog1 from "../../assets/blog1.jpg";
import Blog2 from "../../assets/blog2.jpg";
import Blog3 from "../../assets/blog3.jpg";
import ShapeOne from "../../assets/shape-1.png";

import "./Blog.css";

const Blog = () => {
  return (
    <Fragment>
      <section className="blog section" id="blog">
        <h2 className="section__title text-cs">Latest Blog</h2>
        <p className="section__subtitle">
          My <span>Articles and Advice</span>
        </p>

        <div className="blog__container container grid">
          <div className="blog__item card card-two">
            <span className="blog__date text-cs">31,OCTOBER 2022</span>
            <h3 className="blog__title">The Main Things Of Designer</h3>
            <p className="blog__description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
              dolorum distinctio autem odit aut incidunt ullam reiciendis qui
              nisi unde repellat non soluta quos quaerat, sed ipsum corrupti!
              Nulla, expedita.
            </p>
            <a href="" className="link">
              Read More <FaArrowRight className="link__icon" />
            </a>
            <img src={Blog1} alt="" className="blog__img" />
          </div>

          <div className="blog__item card card-two">
            <span className="blog__date text-cs">31,OCTOBER 2022</span>
            <h3 className="blog__title">The Main Things Of Designer</h3>
            <p className="blog__description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
              dolorum distinctio autem odit aut incidunt ullam reiciendis qui
              nisi unde repellat non soluta quos quaerat, sed ipsum corrupti!
              Nulla, expedita.
            </p>
            <a href="" className="link">
              Read More <FaArrowRight className="link__icon" />
            </a>
            <img src={Blog2} alt="" className="blog__img" />
          </div>

          <div className="blog__item card card-two">
            <span className="blog__date text-cs">31,OCTOBER 2022</span>
            <h3 className="blog__title">The Main Things Of Designer</h3>
            <p className="blog__description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
              dolorum distinctio autem odit aut incidunt ullam reiciendis qui
              nisi unde repellat non soluta quos quaerat, sed ipsum corrupti!
              Nulla, expedita.
            </p>
            <a href="" className="link">
              Read More <FaArrowRight className="link__icon" />
            </a>
            <img src={Blog3} alt="" className="blog__img" />
          </div>
        </div>

        <div className="section__deco deco__right">
          <img src={ShapeOne} alt="shape one" className="shape" />
        </div>
      </section>
    </Fragment>
  );
};

export default Blog;
