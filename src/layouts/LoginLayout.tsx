import { Box } from '@mui/material'
import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { TokenManager, TokenVariable } from 'utils/TokenManager';

const LoginLayout = () => {

  const navigate = useNavigate();

  useEffect(() => {
    if (TokenManager.existToken(TokenVariable.JWT))
      navigate("/home");
    return () => { }
  }, [])

  return (
    <Outlet />
  )
}

export default LoginLayout