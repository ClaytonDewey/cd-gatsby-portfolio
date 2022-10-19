import React from "react";
import Navbar from "./Navbar";
import Loader from "react-loaders";

import "../assets/css/main.scss";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Loader type="semi-circle-spin" />
    </>
  );
};

export default Layout;
