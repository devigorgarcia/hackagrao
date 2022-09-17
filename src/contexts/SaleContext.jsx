import { createContext, useState } from "react";

const SaleContext = createContext({});

export const SaleProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [currentValue, setCurrentValue] = useState(0);
  const [storage, setStorage] = useState(300000);

  const valuesAmount = (sacks, sackValue) => {
    let newValue = sackValue * sacks;
    setCurrentValue(newValue);

    let newStorage = storage - sacks;
    setStorage(newStorage);
  };

  const person = {
    name: name,
    finalValue: currentValue,
  };

  return (
    <SaleContext.Provider value={{ name, setName, valuesAmount, person }}>
      {children}
    </SaleContext.Provider>
  );
};
