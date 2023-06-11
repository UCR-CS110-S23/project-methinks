import React from "react";
import Navigation from "./Navigation";

const Layout = ({ children }) => {
  const authenticated = false;

  if (authenticated) {
    return <div className="w-full bg-methinks-background">{children}</div>;
  }
  return (
    <div className="w-full bg-methinks-background">
      <Navigation />
      {children}
    </div>
  );
};

export default Layout;
