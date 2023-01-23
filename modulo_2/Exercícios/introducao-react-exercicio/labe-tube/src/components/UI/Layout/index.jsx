import React, { Children } from "react";
import "./index.css";

export const Layout = (props) => {
  return <div className={props.className}>{props.children}</div>;
};
