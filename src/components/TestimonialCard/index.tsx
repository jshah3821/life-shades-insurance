import React from "react";
import classes from "./testimonialCard.module.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
interface props {
  src: string;
  description: string;
}
const TestimonialCard = ({ src, description }: props) => {
  return (
    <div className={classes.card}>
      <div className={classes.imgContainer}>
        <LazyLoadImage src={src} />
      </div>
      {/* <p>{description}</p> */}
    </div>
  );
};

export default TestimonialCard;
