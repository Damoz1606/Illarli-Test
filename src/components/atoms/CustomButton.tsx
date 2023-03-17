import { Button } from '@mui/material'
import React from 'react'

interface CustomButtonProps {
  text: string,
  type?: 'button' | 'submit',
  variant?: 'primary' | 'secondary',
  icon?: any,
  onClick?: () => void;
}

const CustomButton = (props: CustomButtonProps) => {
  return (
    <Button
      type={!props.type || props.type === 'button' ? 'button' : 'submit'}
      onClick={props.onClick}
      variant={!props.variant || props.variant === 'primary' ? 'contained' : 'outlined'}
      sx={{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
      }}>
      {props.text}
    </Button>
  )
}

export default CustomButton