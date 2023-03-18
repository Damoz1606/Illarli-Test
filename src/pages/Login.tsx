import { AlertColor, Box, Card, CardContent, Typography } from '@mui/material'
import CustomButton from 'components/atoms/CustomButton'
import CustomTextField from 'components/atoms/CustomTextField'
import LoginForm from 'components/organisms/LoginForm'
import React, { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LoginService } from 'services/Login.Service'
import Illarli from 'assets/illarli-logo-black.svg';
import CustomModal from 'components/molecules/CustomModal'
import CustomLoader from 'components/molecules/CustomLoader'
import CustomSnackbar from 'components/atoms/CustomSnackbar'

const Login = () => {

  const [openLoading, setopenLoading] = useState<boolean>(false);
  const [messageLoading, setmessageLoading] = useState<string | undefined>();
  
  const [openMessage, setopenMessage] = useState<boolean>(false);
  const [textMessage, settextMessage] = useState<string>("");
  const [colorMessage, setcolorMessage] = useState<AlertColor>('error');

  const navigate = useNavigate();

  const handleSubmit = async (data: any) => {
    setopenLoading(true);
    setmessageLoading("Cargando");
    try {
      const response = await LoginService.login(data);
      if (response)
        navigate("/home");
    } catch (error: any) {
      setopenMessage(true);
      settextMessage("Ha ocurrido un error");
      setcolorMessage("error");
    } finally {
      setopenLoading(false);
    }
  }

  return (
    <>
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
            padding: 5,
          }}>
          <Box sx={{
            display: 'flex',
            justifyContent: 'center'
          }}
            mb={10}>
            <img src={Illarli} />
          </Box>
          <Typography color='primary' mb={5} align='center' fontWeight='bold' variant='h5' component='h1'>Iniciar Sesión</Typography>
          <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '2rem' }}>
            <Typography mr={0.5} fontSize='0.8rem' variant='body1' component='p'>En el </Typography>
            <Typography mr={0.5} fontSize='0.8rem' fontWeight='bold' color='primary' component="span">sistema de facturacion</Typography>
            <Typography mr={0.5} fontSize='0.8rem' variant='body1' component='p'>que se adapta a sus necesidades</Typography>
          </div>
          <LoginForm onSubmit={handleSubmit} />
          <Typography mt={5} align='center' fontSize='0.75rem'>
            Con el respaldo de Illarli
          </Typography>
        </CardContent>
      </Card>

      <CustomSnackbar
        onClose={() => setopenMessage(false)}
        text={textMessage}
        open={openMessage}
        color={colorMessage} />

      <CustomLoader open={openLoading}
        showText
        text={messageLoading} />
    </>
  )
}

export default Login