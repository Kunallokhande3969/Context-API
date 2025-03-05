import React from "react";
import Nav1 from "./Nav1";
import Nav2 from "./Nav2";

const nav = (props) => {
  console.log(props);

  return (
    <div className="flex justify-between  px-7 py-10  text-2xl ">
      <Nav1 name={props.name} />
      <Nav2 name={props.name} />
    </div>
  );
};

export default nav;
