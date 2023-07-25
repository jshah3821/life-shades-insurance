import React from "react";
import { Outlet } from "react-router-dom";
import HeaderComponent from "../HeaderComponent";
import Footer from "../../../components/layout/Footer";

const AppLayout = () => {
  return (
    <React.Fragment>
      <HeaderComponent />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
};

export default AppLayout;
