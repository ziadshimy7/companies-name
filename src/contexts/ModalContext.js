import React, { useState, useContext, createContext } from "react";
const modalContext = createContext({
  toggleModal: false,
  setToggleModal: () => {},
});
export const useModal = () => useContext(modalContext);
const ModalProvider = ({ children }) => {
  const [toggleModal, setToggleModal] = useState(false);

  const value = {
    toggleModal,
    setToggleModal,
  };

  return (
    <modalContext.Provider value={value}>{children}</modalContext.Provider>
  );
};

export default ModalProvider;
