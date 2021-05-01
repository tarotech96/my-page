import React from "react";
import { TextareaAutosize } from "@material-ui/core";
import PropsType from "prop-types";

FormInputTextArea.propsType = {
  rowsMin: PropsType.number,
  rowsMax: PropsType.number,
  label: PropsType.string,
  placeholder: PropsType.string,
  setData: PropsType.func,
};

function FormInputTextArea({ rowsMin, rowsMax, label, placeholder, setData }) {
  const onChangeValue = (event) => {
    setData(event.target.value);
  };
  return (
    <TextareaAutosize
      rowsMin={rowsMin}
      rowsMax={rowsMax}
      label={label}
      placeholder={placeholder}
      style={{ marginBottom: 10 }}
      onChange={onChangeValue}
      autoComplete="off"
    />
  );
}

export default FormInputTextArea;
