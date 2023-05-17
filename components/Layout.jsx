import React from "react";
import Navigation from "./Navigation";

const Layout = ({ children }) => {
  return (
    <div className="w-full h-screen bg-methinks-background">
      <Navigation />
      {children}
    </div>
  );
};

export default Layout;
