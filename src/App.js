import Table from "./components/Table/Table";
import Modal from "./components/UI/Modal/Modal";
import { useModal } from "./contexts/ModalContext";
import { useData } from "./contexts/RowsContext";
const App = () => {
  const { toggleModal } = useModal();
  const { setTableRows } = useData();
  const onSubmitForm = (object) => {
    setTableRows((prevState) => [...prevState, object]);
  };
  return (
    <div style={{ position: "relative" }} className="App">
      <Table />
      {toggleModal && <Modal handleSubmit={onSubmitForm} />}
    </div>
  );
};

export default App;
