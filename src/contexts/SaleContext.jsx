import { createContext, useState } from "react";

export const SaleContext = createContext({});

export const SaleProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [currentValue, setCurrentValue] = useState(0);
  const [storage, setStorage] = useState(300000);
  const [grao, setGrao] = useState(false);

  const valuesAmount = (bags, bagsValue) => {
    let newValue = bagsValue * bags;
    setCurrentValue(newValue);

    let newStorage = storage - bags;
    setStorage(newStorage);
  };

  const person = {
    name: name,
    finalValue: currentValue,
  };

  return (
    <SaleContext.Provider value={{ name, setName, valuesAmount, person, storage, setStorage, grao, setGrao }}>
      {children}
    </SaleContext.Provider>
  );
};
