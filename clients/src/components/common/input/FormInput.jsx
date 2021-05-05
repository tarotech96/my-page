import React from 'react'
import PropTypes from 'prop-types'
import { TextField } from '@material-ui/core'

FormInput.propTypes = {
  label: PropTypes.string,
  defaultValue: PropTypes.string,
  setData: PropTypes.func,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  name: PropTypes.string
}

FormInput.defaultProps = {
  type: 'text',
  defaultValue: '',
  name: ''
}

function FormInput({ label, defaultValue, setData, type, disabled, name }) {
  const onChangeValue = (event) => {
    setData(event.target.value)
  }

  return (
    <TextField
      id={`standard-basic_${label}`}
      label={label}
      defaultValue={defaultValue}
      name={name}
      style={{ marginBottom: 10 }}
      onChange={onChangeValue}
      type={type}
      disabled={disabled}
    />
  )
}

export default FormInput
