import { Button } from '@mui/material'
import React from 'react'

interface CustomButtonProps {
  text: string,
  variant?: 'primary' | 'secondary',
  icon?: any,
}

const CustomButton = (props: CustomButtonProps) => {
  return (
    <Button
      variant={!props.variant || props.variant === 'primary' ? 'contained' : 'outlined'}
      sx={{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center'
      }}>
      {props.text}
    </Button>
  )
}

export default CustomButton