import React from "react";
import { Outlet } from "react-router-dom";
import HeaderComponent from "../HeaderComponent";
import Footer from "../../../components/layout/Footer";
import MobileHeader from "../MobileHeader";

const AppLayout = () => {
  return (
    <React.Fragment>
      <HeaderComponent />
      <MobileHeader />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
};

export default AppLayout;
