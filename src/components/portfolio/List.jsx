import React, { Fragment, useState } from "react";

const List = ({ list, filterItems }) => {
  const [active, setActive] = useState(0);

  return (
    <Fragment>
      <div className="portfolio__list">
        {list.map((category, index) => {
          return (
            <button
              className={`${
                active === index ? "active-work" : ""
              } portfolio__list-item text-cs`}
              key={index}
              onClick={() => {
                setActive(index);
                filterItems(category);
              }}
            >
              {category}
            </button>
          );
        })}
      </div>
    </Fragment>
  );
};

export default List;
