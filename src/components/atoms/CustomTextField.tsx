import { TextField } from '@mui/material'
import React, { ChangeEvent } from 'react'

interface CustomTextFieldProps {
  name: string,
  label?: string,
  textarea?: boolean,
  value?: any,
  placeholder?: string,
  required?: boolean,
  type?: React.HTMLInputTypeAttribute | undefined,
  onChange?: (data: any) => void;
}

const CustomTextField = (props: CustomTextFieldProps) => {

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    props.onChange?.({
      name: props.name,
      value: event.target.value
    });
  }

  return (
    <TextField
      name={props.name}
      onChange={handleChange}
      label={props.label}
      placeholder={props.placeholder}
      multiline={!!props.textarea}
      required={!!props.required}
      value={props.value}
      type={props.type}
      variant="outlined" />
  )
}

export default CustomTextField