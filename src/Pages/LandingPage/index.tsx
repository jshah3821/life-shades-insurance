import React, { useState } from "react";
import classes from "./LandingPage.module.scss";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import bannerImg from "../../assets/images/Background/banner_img.webp";
import { svgSectionData } from "../../helpers/storage";
import SlideCarousel from "../../components/SlideCarousel";
import ContactUsForm from "../../components/ContactUsForm";

const LandingPage = () => {
  const [svgMouseOverIndex, setSvgMouseOverIndex] = useState(NaN);
  return (
    <React.Fragment>
      <div className={classes.landing_page_main}>
        <div className={classes.bannerSection}>
          <LazyLoadImage
            width="100%"
            height="500px"
            src={bannerImg}
            alt="ins_banner"
          />
        </div>
        <div className={classes.ourServices}>
          <h2>Our Services</h2>
          <div className={classes.svgSection}>
            {svgSectionData.map((data, index) => {
              return (
                <div
                  key={`${index}-svg`}
                  onMouseOver={() => setSvgMouseOverIndex(index)}
                  onMouseLeave={() => setSvgMouseOverIndex(NaN)}
                >
                  <LazyLoadImage
                    width="100px"
                    height="100px"
                    src={index === svgMouseOverIndex ? data.white : data.brown}
                    alt="ins_banner"
                  />
                  <h3>{data.name}</h3>
                </div>
              );
            })}
          </div>
        </div>
        <div className={classes.testimonial}>
          <h2>Our Testimonials</h2>
          <SlideCarousel />
        </div>
        <div className={classes.contactUs}>
          <h2>Contact Us</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.694471758649!2d72.55904947388595!3d23.034987715867533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e853c0056d999%3A0x9f9cfb680087407e!2sLifeshades%20Insurance%20%26%20Investment%20Advisory!5e0!3m2!1sen!2sin!4v1690635250779!5m2!1sen!2sin"
            width="100%"
            height="350"
            loading="lazy"
          ></iframe>
          <ContactUsForm />
        </div>
      </div>
    </React.Fragment>
  );
};

export default LandingPage;
