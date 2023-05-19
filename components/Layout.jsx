import React from "react";
import Navigation from "./Navigation";

const Layout = ({ children }) => {
  const authenticated = true;

  if (authenticated) {
    return (
      <div className="w-full h-screen bg-methinks-background">{children}</div>
    );
  }
  return (
    <div className="w-full h-screen bg-methinks-background">
      <Navigation />
      {children}
    </div>
  );
};

export default Layout;
