import Table from "./components/Table/Table";
import Modal from "./components/UI/Modal/Modal";
import { useModal } from "./contexts/ModalContext";
import { useState } from "react";

const App = () => {
  const [tableRows, setTableRows] = useState([]);
  const { toggleModal } = useModal();
  const onSubmitForm = (object) => {
    setTableRows((prevState) => [...prevState, object]);
  };
  return (
    <div style={{ position: "relative" }} className="App">
      <Table setTableRows={setTableRows} rows={tableRows} />
      {toggleModal && <Modal handleSubmit={onSubmitForm} />}
    </div>
  );
};

export default App;
