import React, { Children } from 'react';
import classes from "./CusContainer.module.scss";
import { Col } from 'react-bootstrap';

const CusContainer = ({ children }: { children: JSX.Element }) => {
  return (
    <div className={classes.cus_container_main}>
      <Col xs={12} md={12} lg={10}>
        {children}
      </Col>
    </div>
  )
}

export default CusContainer