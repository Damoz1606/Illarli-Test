import { Box, Typography, useMediaQuery } from '@mui/material'
import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { TokenManager, TokenVariable } from 'utils/TokenManager';
import Background from 'assets/background-auth.jpg';
import IllarliImage from 'assets/login-img.png';

const LoginLayout = () => {

  const navigate = useNavigate();

  const matches = useMediaQuery('(min-width:768px)');

  useEffect(() => {
    if (TokenManager.existToken(TokenVariable.JWT))
      navigate("/home");
    return () => { }
  }, [])

  return (
    <div style={{
      position: 'relative',
      backgroundImage: `url(${Background})`,
      width: '100%',
      height: '100%',
      zIndex: '0'
    }}>
      <Outlet />
      {matches && <div style={{
        right: 0,
        bottom: 0,
        width: '100%',
      }}>
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: '25%',
            color: 'white'
          }}>
          <Typography fontWeight='lighter' fontSize={'1.5rem'} variant='body1'>Que bueno volver a verte</Typography>
          <Typography fontWeight='bold' fontSize={'1.5rem'} variant='body1'>Bienvenido a</Typography>
          <Typography fontWeight='bold' fontSize={'1.5rem'} variant='body1'>ILLARLI</Typography>
        </div>
        <img
          style={{
            position: 'absolute',
            right: 0,
            bottom: 0,
            width: '100%',
            maxWidth: '500px'
          }}
          src={IllarliImage} />
      </div>}
    </div>
  )
}

export default LoginLayout