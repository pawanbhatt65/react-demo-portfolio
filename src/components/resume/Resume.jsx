import React, { Fragment } from "react";
import { cv } from "../../Data";
import Card from "./Card";
import ShapeOne from "../../assets/shape-1.png";
import "./Resume.css";

const Resume = () => {
  return (
    <Fragment>
      <section className="resume section" id="resume">
        <h2 className="section__title text-cs">Resume</h2>
        <p className="section__subtitle">
          My <span>Story</span>
        </p>

        <div className="resume__container container grid">
          <div className="resume__group">
            <h3 className="resume__heading">Education</h3>

            <div className="resume__items">
              {cv.map((val, id) => {
                if (val.category === "education") {
                  return (
                    <Card
                      key={id}
                      title={val.title}
                      subtitle={val.subtitle}
                      date={val.date}
                      description={val.description}
                    />
                  );
                }
              })}
            </div>
          </div>

          <div className="resume__group">
            <h3 className="resume__heading">Experience</h3>

            <div className="resume__items">
              {cv.map((val, id) => {
                if (val.category === "experience") {
                  return (
                    <Card
                      key={id}
                      title={val.title}
                      subtitle={val.subtitle}
                      date={val.date}
                      description={val.description}
                    />
                  );
                }
              })}
            </div>
          </div>
        </div>

        <div className="section__deco deco__left">
          <img src={ShapeOne} alt="shape one" className="shape" />
        </div>
      </section>
    </Fragment>
  );
};

export default Resume;
