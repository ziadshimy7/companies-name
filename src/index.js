import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ModalProvider from "./contexts/ModalContext";
import RowProvider from "./contexts/RowsContext";
ReactDOM.render(
  <React.StrictMode>
    <RowProvider>
      <ModalProvider>
        <App />
      </ModalProvider>
    </RowProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
