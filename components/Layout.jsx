import React from "react";
import Navigation from "./Navigation";

const Layout = ({ children }) => {
  return (
    <div className="bg-[#24292F]">
      <Navigation />
      {children}
    </div>
  );
};

export default Layout;
