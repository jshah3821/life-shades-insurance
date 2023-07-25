import React from "react";
import "./buttonGroup.scss";
import BusinessRight from "../../../assets/Icon/BusinessRight.svg"
import BusinessLeft from "../../../assets/Icon/BusinessLeft.svg"

export const ButtonGroup = ({ onClick, direction }) => {
  const icon = direction === "left" ? <img src={BusinessLeft} alt="left"/> : <img src={BusinessRight} alt="right"/>;
  return (
    <button className={`custom-button custom-${direction}`} onClick={onClick}>
      {icon}
    </button>
  );
};
