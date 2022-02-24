import React, { useState, Suspense, useEffect, useCallback } from "react";
import Button from "../UI/Button/Button";
import styles from "./Table.module.css";
import { useModal } from "../../contexts/ModalContext";
import Rows from "./Rows";
const Table = ({ rows, setTableRows }) => {
  const [toggleDisplayINN, setToggleDisplayINN] = useState(false);
  const [innData, setINNData] = useState([]);
  const [innQuery, setINNQuery] = useState("");
  const { setToggleModal } = useModal();
  const removeCompanyHandler = (rowID) => {
    const deletedRowArr = rows.filter((row) => row.id !== rowID);
    setTableRows([...deletedRowArr]);
  };
  const fetchData = async () => {
    try {
      const url = `https://suggestions.dadata.ru/suggestions/api/4_1/rs/findById/party?query=${innQuery}`;
      const token = "c40fef3d1609f56aa0cc22d49aa5c5b1ef5b3dcf";
      const options = {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Token " + token,
        },
      };
      fetch(url, options)
        .then((responseJson) => responseJson.json())
        .then((results) => {
          setINNData(results.suggestions);
        });
    } catch (err) {
      console.log(err);
    }
  };
  const addINNRow = useCallback(() => {
    const newCompanies = innData?.map((company, index) => {
      return {
        id: new Date().getTime() + index,
        name: company.value,
        address: company.data.address.value,
        taxNumber: company.data.inn,
        registrationNumber: company.data.ogrn,
        date: new Date(company.data.ogrn_date)
          .toLocaleDateString("en-GB")
          .split("/")
          .join("-"),
      };
    });
    setTableRows((prevState) => [...prevState, ...newCompanies]);
  }, [innData, setTableRows]);
  return (
    <div className={styles["app-container"]}>
      <div className={styles["button__container"]}>
        <Button
          onClickHandler={() => {
            setToggleModal(true);
          }}
        >
          Add
        </Button>
        <Button
          className={styles["toggle__inn"]}
          onClickHandler={() => {
            setToggleDisplayINN((prevState) => !prevState);
          }}
        >
          Загрузить ИНН
        </Button>
        {toggleDisplayINN && (
          <div className={styles["search__inn"]}>
            <input
              onChange={(e) => {
                setINNQuery(e.target.value);
              }}
              type="text"
            />
            <button
              onClick={async () => {
                fetchData();
                addINNRow();
              }}
            >
              Загрузить
            </button>
          </div>
        )}
      </div>

      <table>
        <thead>
          <tr>
            <th>НАИМЕНОВАНИЕ</th>
            <th>АДРЕС</th>
            <th>ОГРН</th>
            <th className={styles["inn__field"]}>ИНН</th>
            <th>ДАТА</th>
            <th>УДАЛИТЬ</th>
          </tr>
        </thead>
        <tbody>
          <Suspense fallback="Loading...">
            {innData &&
              rows.length > 0 &&
              rows?.map((row, index) => (
                <Rows
                  key={index}
                  row={row}
                  setTableRows={setTableRows}
                  rows={rows}
                  removeCompanyHandler={removeCompanyHandler}
                />
              ))}
          </Suspense>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
