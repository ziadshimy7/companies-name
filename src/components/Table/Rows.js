import React from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import styles from "./Rows.module.css";
import { useState } from "react";
const Rows = ({ row, removeCompanyHandler, setTableRows }) => {
  const [newAddressValue, setNewAddressValue] = useState(row.address);
  const [editAddress, setEditAddress] = useState(false);
  const onSaveNewAddress = (e) => {
    e.preventDefault();
    setTableRows((prevState) => {
      const items = [...prevState];
      const modifiedObjIndex = items.findIndex((obj) => obj.id === row.id);
      const modifiedObj = items[modifiedObjIndex];
      modifiedObj["address"] = newAddressValue;
      items[modifiedObjIndex] = modifiedObj;
      return [...items];
    });
    setEditAddress(false);
  };
  const editableAddress = (
    <>
      <input
        onChange={(e) => {
          setNewAddressValue(e.target.value);
        }}
        type="text"
        defaultValue={newAddressValue}
      />
      <button
        onClick={(e) => {
          onSaveNewAddress(e);
        }}
      >
        Save
      </button>
      <button
        onClick={() => {
          setEditAddress(false);
        }}
      >
        X
      </button>
    </>
  );
  return (
    <>
      <tr className={styles["table__row"]}>
        <td data-label="НАИМЕНОВАНИЕ">{row.name}</td>
        <td
          data-label="АДРЕС"
          onDoubleClick={() => {
            setEditAddress(true);
          }}
        >
          {editAddress ? (
            editableAddress
          ) : (
            <>
              {row.address}
              <AiFillEdit
                className={styles["add_btn"]}
                onClick={() => {
                  setEditAddress(true);
                }}
              />
            </>
          )}
        </td>
        <td data-label="ОРГН">{row.registrationNumber}</td>
        <td data-label="ИНН">{row.taxNumber}</td>
        <td data-label="ДАТА">{row.date}</td>
        <td>
          <BsFillTrashFill
            onClick={() => {
              removeCompanyHandler(row.id);
            }}
            className={styles["delete_btn"]}
          />
        </td>
      </tr>
    </>
  );
};

export default Rows;
