import React, { Fragment } from "react";
import { skills } from "../../Data";
import ShapeOne from "../../assets/shape-1.png";

import "./Skills.css";

const Skills = () => {
  return (
    <Fragment>
      <section className="skills section" id="skills">
        <h2 className="section__title text-cs">Professional Skills</h2>
        <p className="section__subtitle">
          My <span>Talent</span>
        </p>

        <div className="skills__container container grid">
          {skills.map(({ name, percentage, description }, index) => {
            return (
              <div className="skills__item" key={index}>
                <div className="skills__titles">
                  <h3 className="skills__name">{name}</h3>
                  <span className="skills__number">
                    {percentage} <span>%</span>
                  </span>
                </div>
                <p className="skills__description">{description}</p>
                <div className="skills__bar">
                  <span
                    className="skills__percentage"
                    style={{ width: `${percentage}%` }}
                  >
                    <span></span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="section__deco deco__left">
          <img src={ShapeOne} alt="shape one" className="shape" />
        </div>
      </section>
    </Fragment>
  );
};

export default Skills;
