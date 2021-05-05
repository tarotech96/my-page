import React from 'react'
import { TextareaAutosize } from '@material-ui/core'
import PropsType from 'prop-types'

FormInputTextArea.propsType = {
  rowsMin: PropsType.number,
  rowsMax: PropsType.number,
  label: PropsType.string,
  placeholder: PropsType.string,
  setData: PropsType.func,
  name: PropsType.string
}

function FormInputTextArea({ rowsMin, rowsMax, label, placeholder, setData, name }) {
  const onChangeValue = (event) => {
    setData(event.target.value)
  }
  return (
    <TextareaAutosize
      rowsMin={rowsMin}
      rowsMax={rowsMax}
      label={label}
      name={name}
      placeholder={placeholder}
      style={{ marginBottom: 10 }}
      onChange={onChangeValue}
      autoComplete="off"
    />
  )
}

export default FormInputTextArea
