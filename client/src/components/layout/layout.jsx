import React from "react";
import { Navbar } from "../navbar/navbar";
import { FooterSection } from "../footer/footer";

export const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <FooterSection />
    </>
  );
};
