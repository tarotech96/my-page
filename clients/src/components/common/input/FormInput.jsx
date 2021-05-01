import React from "react";
import PropTypes from 'prop-types'
import { TextField } from "@material-ui/core";

FormInput.propTypes = {
  label: PropTypes.string,
  setData: PropTypes.func
}

function FormInput({ label, setData}) {

  const onChangeValue = (event) => {
    setData(event.target.value);
  }

  return (
    <TextField
      id="standard-basic"
      label={label}
      style={{ marginBottom: 10 }}
      onChange={onChangeValue}
      autoComplete="off"
    />
  );
}

export default FormInput;
