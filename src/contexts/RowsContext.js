import React, { useState, useContext, createContext } from "react";
const rowContext = createContext({
  tableRows: [],
  setTableRows: () => {},
  isLoading: false,
  setIsLoading: () => {},
});
export const useData = () => useContext(rowContext);
const RowProvider = ({ children }) => {
  const [tableRows, setTableRows] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const value = {
    tableRows,
    setTableRows,
    isLoading,
    setIsLoading,
  };

  return <rowContext.Provider value={value}>{children}</rowContext.Provider>;
};

export default RowProvider;
