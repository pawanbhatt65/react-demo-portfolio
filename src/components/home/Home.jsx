import React, { Fragment } from "react";
import ProfileImage from "../../assets/profile-img.png";
import ShapeOne from "../../assets/shape-1.png";
import ShapeTwo from "../../assets/shape-2.png";

import { FaTwitter, FaDribbble, FaBehance } from "react-icons/fa";

import CV from "../../assets/resume.pdf";

import "./Home.css";

const Home = () => {
  return (
    <Fragment>
      <section className="home" id="home">
        <div className="home__wrapper">
          <div className="home__container container">
            <p className="home__subtitle text-cs">
              Hello, <span>My Name Is</span>
            </p>
            <h1 className="home__title text-cs">
              <span>ZOE</span> MILLER
            </h1>
            <p className="home__job">
              <span className="text-cs">I AM</span> <b>Web Developer</b>
            </p>

            <div className="home__img-wrapper">
              <div className="home__banner">
                <img
                  src={ProfileImage}
                  alt="Profile Image"
                  className="home__profile"
                />
              </div>
              <p className="home__data home__data-one">
                <span className="text-lg">
                  12 <b>+</b>
                </span>
                <span className="text-sm text-cs">
                  Years of <span>Experience</span>
                </span>
              </p>

              <p className="home__data home__data-two">
                <span className="text-lg">330</span>
                <span className="text-sm text-cs">
                  Completed <span>Projects</span>
                </span>
              </p>

              <img src={ShapeOne} alt="Shape One" className="shape shape__1" />
              <img src={ShapeTwo} alt="Shape One" className="shape shape__2" />
              <img
                src={ShapeTwo}
                alt="Shape Two Another"
                className="shape shape__3"
              />
            </div>

            <p className="home__text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Obcaecati, vel. sit amet consectetur adipisicing elit. Tempora,
              error
            </p>

            <div className="home__socials">
              <a href="" className="home__social-link">
                <FaTwitter />
              </a>
              <a href="" className="home__social-link">
                <FaDribbble />
              </a>
              <a href="" className="home__social-link">
                <FaBehance />
              </a>
            </div>

            <div className="home__btns">
              <a download="" href={CV} className="btn text-cs">
                Download CV
              </a>
              <a href="#skills" className="hero__link text-cs">
                My Skills
              </a>
            </div>
          </div>

          <div className="section__deco deco__left">
            <img src={ShapeOne} alt="shape one" className="shape" />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
