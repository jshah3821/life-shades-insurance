import React from "react";
import classes from "./headerComponent.module.scss";
import { Col, Row } from "react-bootstrap";
import brandLogo from "../../../assets/images/brandLogo.png";
import { HOME_PAGE, MEDICARE_PAGE } from "../../../routing/routes";
import { useNavigate } from "react-router-dom";
const HeaderComponent = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <Row className={`${classes.headerContainer} g-0`}>
        <Col
          className={classes.logoContainer}
          onClick={() => {
            navigate(HOME_PAGE);
          }}
          lg={2}
          sm={12}
        >
          <div className={classes.brandLogo}>
            <img src={brandLogo} alt="brandLogo" />
          </div>
        </Col>
        <Col lg={8} sm={12} className={classes.navLinks}>
          <div>
            <h1>About</h1>
          </div>
          <div>
            <h1
              onClick={() => {
                navigate(MEDICARE_PAGE);
              }}
            >
              Medicare
            </h1>
          </div>
          <div>
            <h1>Employee Benifits</h1>
          </div>
          <div>
            <h1>Individuals</h1>
          </div>
        </Col>
        <Col
          lg={2}
          sm={12}
          className={`${classes.navLinks} ${classes.contactTab}`}
        >
          <div>
            <h1>Contact Us</h1>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default HeaderComponent;
