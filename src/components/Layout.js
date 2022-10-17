import React from "react";
import Navbar from "./Navbar";

import "../assets/css/main.scss";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
