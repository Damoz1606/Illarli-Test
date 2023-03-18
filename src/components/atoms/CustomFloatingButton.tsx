import { Fab } from '@mui/material';
import React from 'react'

interface CustomFloatingButtonProps {
  icon: any,
  position: 'top-left' | 'top-right' | 'top-center' | 'bottom-left' | 'bottom-right' | 'bottom-center' | 'left' | 'right' | 'center'
  text?: string,
  type?: 'button' | 'submit',
  variant?: 'primary' | 'secondary',
  onClick?: () => void;
}

const CustomFloatingButton = (props: CustomFloatingButtonProps) => {

  const getPosition = () => {
    const position: any = {
      top: null,
      left: null,
      right: null,
      bottom: null
    }

    switch (props.position) {
      case 'bottom-center':
        position.bottom = '1rem';
        break;
      case 'bottom-left':
        position.bottom = '1rem';
        position.left = '1rem';
        break;
      case 'bottom-right':
        position.bottom = '1rem';
        position.right = '1rem';
        break;
      case 'center':
        position.bottom = '50%';
        position.right = '50%';
        break;
      case 'left':
        position.left = '1rem';
        break;
      case 'right':
        position.right = '1rem';
        break;
      case 'top-center':
        position.top = '1rem';
        break;
      case 'top-left':
        position.top = '1rem';
        position.left = '1rem';
        break;
      case 'top-right':
        position.top = '1rem';
        position.right = '1rem';
        break;
    }

    return position;
  }

  return (
    <Fab
      onClick={props.onClick}
      variant={!props.text ? 'circular' : 'extended'}
      color={props.variant}
      sx={{
        display: 'flex',
        position: 'fixed',
        top: getPosition().top,
        bottom: getPosition().bottom,
        right: getPosition().right,
        left: getPosition().left
      }}>
      {props.icon}
      {props.text && <div style={{ marginLeft: 2 }} />}
      {props.text}
    </Fab>
  )
}

export default CustomFloatingButton