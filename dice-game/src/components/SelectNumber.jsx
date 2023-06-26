import React, { useState } from "react";

const SelectNumber = ({errorSelectNumber, setErrorSelectNumber, selectedNumber,setSelectedNumber }) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];

  const handleNumberSelect = (value) => {
    setSelectedNumber(value);
    setErrorSelectNumber('')
  }
  return (
    <div className="selectNumWrap mt-3">
      <p className="error">{errorSelectNumber}</p>
      <ul>
        {arrNumber.map((value, i) => {
          return (
            <li
              key={i}
              className={value === selectedNumber ? "selectedClass" : ""}
              onClick={() => handleNumberSelect(value) }
            >
              {value}
            </li>
          );
        })}
      </ul>
      <p className="mt-2 text-center">Select Number</p>
    </div>
  );
};

export default SelectNumber;
