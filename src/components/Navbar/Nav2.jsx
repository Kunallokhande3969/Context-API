import React, { useContext } from "react";
import { UserDataContext } from "../../Context/Usercontext";

const Nav2 = () => {
  const s = useContext(UserDataContext);  // yeh hook yahan hona chahiye
  console.log(s);

  return (
    <div>
      <h1>About</h1>
    </div>
  );
};

export default Nav2;
