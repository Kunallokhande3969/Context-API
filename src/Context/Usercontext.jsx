import React, { createContext } from "react";
export const UserDataContext = createContext();

  const data = "kunal"



const userContext = (props) => {
  return (
    <div>
      <UserDataContext.Provider value={data}>{props.children} kunal</UserDataContext.Provider>
    </div>
  );
};

export default userContext;
