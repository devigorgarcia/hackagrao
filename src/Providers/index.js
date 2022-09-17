import React from "react";
import { SaleProvider } from "../contexts/SaleContext";

export const Providers = ({ children }) => {
  return (
    <>
      <SaleProvider>{children}</SaleProvider>;
    </>
  );
};
