import React, { Fragment } from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import ShapeTwo from "../../assets/shape-2.png";

const Items = ({ projectItems }) => {
  return (
    <Fragment>
      {projectItems.map((projectItem) => {
        const { id, img, category, title, description } = projectItem;
        return (
          <motion.div
            layout
            animate={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0.8, scale: 0.6 }}
            exit={{ opacity: 0.8, scale: 0.6 }}
            transition={{ duration: 0.3 }}
            className="portfolio__items card card-two"
            key={id}
          >
            <div className="portfolio__img-wrapper">
              <img src={img} alt="Project Image" className="portfolio__img" />
            </div>
            <span className="portfolio__category text-cs">{category}</span>
            <h3 className="portfolio__title">{title}</h3>
            <p className="portfolio__description">{description}</p>
            <a href="#pricing" className="link">
              See Pricing <FaArrowRight className="link__icon" />
            </a>
            <img src={ShapeTwo} alt="Shape Image" className="shape c__shape" />
          </motion.div>
        );
      })}
    </Fragment>
  );
};

export default Items;
