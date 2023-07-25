import React from "react";
import classes from "./footer.module.scss";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import BrandLogo from "../../../assets/images/brandLogo.png";
import InstaIcn from "../../../assets/Icon/FooterInsta.svg";
import FacebookIcn from "../../../assets/Icon/FooterFacebook.svg";
import PinterestIcn from "../../../assets/Icon/FooterPinterest.svg";
import TwitterIcn from "../../../assets/Icon/FooterTwitter.svg";
import MasterCard from "../../../assets/Icon/MasterCardIcn.svg";
import VisaCard from "../../../assets/Icon/VisaCardIcn.svg";
import Paypal from "../../../assets/Icon/PaypallIcn.svg";

const Footer = () => {
  return (
    <React.Fragment>
      <div className={classes.footerMain}>
        <Row className={classes.footer_row}>
          <Col lg={6} md={5} sm={12} className={classes.description_section}>
            <div className={`${classes.footer__column} mb-0`}>
              <div className={`${classes.brandLogo__background}`}>
                <Link to="#" target="_blank">
                  <img
                    src={BrandLogo}
                    alt="brand-logo"
                    className={classes.company__logo}
                  />
                </Link>
              </div>
              <p className={`${classes.footer_text}`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu
                ornare nunc quam dictum scelerisque amet. In ac sed egestas sed
                tempus nisl aliquam,
              </p>
              <div className={`${classes.social__icons} my-2`}>
                <img src={InstaIcn} alt="insta-icon" />
                <img src={FacebookIcn} alt="insta-icon" />
                <img src={PinterestIcn} alt="insta-icon" />
                <img src={TwitterIcn} alt="insta-icon" />
              </div>
            </div>
          </Col>
          <Col lg={6} md={7} sm={12} className="my-5">
            <Row className="mt-4">
              <Col lg={6} md={6} sm={12}>
                <div className={classes.footer__column}>
                  <div className={classes.footer__title}>
                    <h6>Let Us Help</h6>
                  </div>
                  <ul className={`${classes.footer__links} ps-0`}>
                    <li>
                      <Link to="#">My Account</Link>
                    </li>
                    <li>
                      <Link to="#">Shipping</Link>
                    </li>{" "}
                    <li>
                      <Link to="#">Contact & Support</Link>
                    </li>{" "}
                    <li>
                      <Link to="#">All Products</Link>
                    </li>
                    <li>
                      <Link to="#">Ideas & Advice</Link>
                    </li>{" "}
                    <li>
                      <Link to="#">Reseller Program</Link>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col lg={6} md={6} sm={12}>
                <div className={classes.footer__column}>
                  <div className={classes.footer__title}>
                    <h6>Our Company</h6>
                  </div>
                  <ul className={`${classes.footer__links} ps-0`}>
                    <li>
                      <Link to="#">About us</Link>
                    </li>
                    <li>
                      <Link to="#">Careers</Link>
                    </li>{" "}
                    <li>
                      <Link to="#">For Investors</Link>
                    </li>{" "}
                    <li>
                      <Link to="#">For Media</Link>
                    </li>
                    <li>
                      <Link to="#">Sustainability</Link>
                    </li>{" "}
                    <li>
                      <Link to="#">Do not sell my info</Link>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <Row className={classes.copyright__section}>
        <Col lg={9} md={8} className={classes.copyright_text_main}>
          <p className={`${classes.copyright_text}`}>
            A CIMPRESS company © 2001-2023 jet. All rights reserved.
          </p>
        </Col>
        <Col lg={3} md={4}>
          <div className={classes.payment_methods}>
            <Link to="#" target="_blank">
              <img src={MasterCard} alt="payment" className="icon__facebook" />
            </Link>
            <Link to="#" target="_blank">
              <img src={Paypal} alt="payment" className="icon__instagram" />
            </Link>
            <Link to="#" target="_blank">
              <img src={VisaCard} alt="payment" className="icon__twitter" />
            </Link>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Footer;
