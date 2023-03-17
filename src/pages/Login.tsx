import { Box, Card, CardContent, Typography } from '@mui/material'
import CustomButton from 'components/atoms/CustomButton'
import CustomTextField from 'components/atoms/CustomTextField'
import LoginForm from 'components/organisms/LoginForm'
import React, { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LoginService } from 'services/Login.Service'

const Login = () => {

  const navigate = useNavigate();

  const handleSubmit = async (data: any) => {
    try {
      const response = await LoginService.login(data);
      if (response)
        navigate("/home");
    } catch (error: any) {

    }
  }

  return (
    <Card sx={{
      width: '100%',
      height: '100%',
      maxWidth: '500px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}
      variant='outlined'>
      <CardContent
        sx={{
          width: '100%',
          padding: 5
        }}>
        <Typography mb={5} align='center' fontWeight='bold' variant='h5' component='h1'>Iniciar Sesión</Typography>
        <Typography mb={5} fontSize='0.8rem' variant='body1'>En el <span style={{ fontWeight: 'bold' }}>sistema de facturacion</span> que se adapta a sus necesidades</Typography>
        <LoginForm onSubmit={handleSubmit} />
      </CardContent>
    </Card>
  )
}

export default Login