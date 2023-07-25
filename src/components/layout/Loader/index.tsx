import React from "react";
import classes from "./loader.module.scss";

interface Props {
  transparent: boolean;
}
const Loader = ({ transparent }: Props) => {
  return (
    <div className={`loader-container ${transparent ? "transparent" : ""}`}>
      <div className="text-center">
        <div className={classes.loader}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

Loader.defaultProps = {
  transparent: false,
};
export default Loader;
