import React from "react";

const Switch = ({ checked = true, handleToggle, portal }) => {
  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={portal === "user" ? true : false}
        onChange={(e) => handleToggle(e)}
      />
      <span className="slider"></span>
    </label>
  );
};

export default Switch;
