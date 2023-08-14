import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";

import { eventPhotos } from "../../../helpers/storage";
import classes from "./about_slick.module.scss";

const AboutSlick = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const slider1Ref = useRef(null);
  const slider2Ref = useRef(null);

  useEffect(() => {
    setNav1(slider1Ref.current);
    setNav2(slider2Ref.current);
  }, []);

  return (
    <div className={classes.slick_container}>
      <h2>Our Events</h2>
      <Slider asNavFor={nav2} ref={slider1Ref}>
        {eventPhotos.map((url, index) => {
          return (
            <div className={classes.imgWrapper_slider1}>
              <img src={url} />
            </div>
          );
        })}
      </Slider>
      <Slider
        asNavFor={nav1}
        ref={slider2Ref}
        slidesToShow={4}
        swipeToSlide={true}
        focusOnSelect={true}
      >
        {eventPhotos.map((url, index) => {
          return (
            <div className={classes.imgWrapper_slider2}>
              <img src={url} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default AboutSlick;
