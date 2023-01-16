import React from "react";
import { db } from "../../db";

const Grid = () => {
  return (
    <>
      {db.forEach((element) => {
        return (
          <>
            <div
              className={"card" + element.name.toLowerCase().replace(" ", "")}
            >
              <p>{element.name}</p>
              <p>{element.dosage}</p>
              <p>{element.type}</p>
              <p>{element.price}</p>
              <img className="card-img" src={element.img} />
              <button type="submit">Add to cart</button>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Grid;
