import React from "react";
import { SaleProvider } from "../contexts/SaleContext";
import ScenarioProvider from "../contexts/ScenarioContext";

export const Providers = ({ children }) => {
  return (
    <>
      <SaleProvider>
        <ScenarioProvider>
        {children}
        </ScenarioProvider>
      </SaleProvider>;

    </>
  );
};
