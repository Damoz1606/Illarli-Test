import { TableCell } from '@mui/material'
import React from 'react'

interface CustomRowProps {
  text: string,
  align?: "left" | "center" | "right" | "justify" | "inherit" | undefined
}

const CustomRow = (props: CustomRowProps) => {
  return (
    <TableCell
      component='td'
      align={props.align}>
      {props.text}
    </TableCell>
  )
}

export default CustomRow