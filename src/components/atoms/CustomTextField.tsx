import { Visibility, VisibilityOff } from '@mui/icons-material';
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material'
import React, { ChangeEvent, useState } from 'react'

interface CustomTextFieldProps {
  name: string,
  label?: string,
  textarea?: boolean,
  value?: any,
  placeholder?: string,
  required?: boolean,
  type?: React.HTMLInputTypeAttribute | undefined,
  onChange?: (data: any) => void;
  icon?: any;
}

const CustomTextField = (props: CustomTextFieldProps) => {

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    props.onChange?.({
      name: props.name,
      value: event.target.value
    });
  }

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <>
      <FormControl sx={{ width: '100%' }} variant="outlined">
        <InputLabel htmlFor={props.name}>{props.label}</InputLabel>
        <OutlinedInput
          id={props.name}
          sx={{
            marginBottom: 2
          }}
          name={props.name}
          onChange={handleChange}
          label={props.label}
          placeholder={props.placeholder}
          multiline={!!props.textarea}
          rows={!!props.textarea ? 5 : 1}
          required={!!props.required}
          value={props.value}
          type={props.type === 'password' && showPassword ? 'text' : props.type}
          startAdornment={
            props.icon && <>
              <InputAdornment position="start">
                {props.icon}
              </InputAdornment>
            </>
          }
          endAdornment={
            props.type === 'password' && <InputAdornment position="end">
              <IconButton
                onClick={handleClickShowPassword}
                edge="end">
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </>
  )
}

export default CustomTextField