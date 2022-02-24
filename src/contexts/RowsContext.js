import React, { useState, useContext, createContext } from "react";
const rowContext = createContext({
  tableRows: [],
  setTableRows: () => {},
});
export const useData = () => useContext(rowContext);
const RowProvider = ({ children }) => {
  const [tableRows, setTableRows] = useState([]);

  const value = {
    tableRows,
    setTableRows,
  };

  return <rowContext.Provider value={value}>{children}</rowContext.Provider>;
};

export default RowProvider;
