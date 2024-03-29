import React, { useContext, useState } from "react";
import UserContext from "../utils/UserContext";

const LogIn = () => {
  const { userName, setUserName, setShowProfile } = useContext(UserContext);

  const handleChange = (e) => {
    setUserName(e.target.value);
  };

  const handleClick = () => {
    setShowProfile(true);
  };

  return (
    <div className="m-4 p-2">
      <input
        className="p-2 mr-2"
        type="text"
        placeholder="User name"
        onChange={handleChange}
      />
      <input type="password" placeholder="Password" className="p-2 mr-2" />
      <button onClick={handleClick} className="bg-black text-white p-2">
        LogIn
      </button>
    </div>
  );
};
export default LogIn;
