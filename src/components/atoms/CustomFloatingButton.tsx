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
        position.bottom = '0px';
        break;
      case 'bottom-left':
        position.bottom = '0px';
        position.left = '0px';
        break;
      case 'bottom-right':
        position.bottom = '0px';
        position.right = '0px';
        break;
      case 'center':
        position.bottom = '50%';
        position.right = '50%';
        break;
      case 'left':
        position.left = '0px';
        break;
      case 'right':
        position.right = '0px';
        break;
      case 'top-center':
        position.top = '0px';
        break;
      case 'top-left':
        position.top = '0px';
        position.left = '0px';
        break;
      case 'top-right':
        position.top = '0px';
        position.right = '0px';
        break;
    }

    return position;
  }

  return (
    <Fab
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