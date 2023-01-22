import React from "react";

import "./style.css";

const Grid = ({ items }) => {
  const drugs = items.map((item, key) => {
    return (
      <>
        <div
          key={key}
          className={"card " + item.name.toLowerCase().replace(" ", "")}
        >
          <p>{item.name}</p>
          <p>{item.breed}</p>
          <p>{item.weight}</p>
          <p>{item.age}</p>
          <img className="card-img" src={item.img} />
          <button type="submit">Add to cart</button>
        </div>
      </>
    );
  });

  return <main className="grid">{drugs}</main>;
};

export default Grid;
