import { Box, Checkbox, FormControlLabel, Typography } from '@mui/material';
import CustomButton from 'components/atoms/CustomButton'
import CustomTextField from 'components/atoms/CustomTextField'
import React, { FormEvent, useState } from 'react'
import { Link } from 'react-router-dom';

interface LoginFormProps {
    onSubmit: (data: {
        email: string,
        password: string
    }) => void;
}

const LoginForm = (props: LoginFormProps) => {

    const [credentials, setcredentials] = useState<{
        email: string,
        password: string
    }>({
        email: "",
        password: ""
    });

    const [rememberMe, setrememberMe] = useState(false);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        props.onSubmit?.(credentials);
    }

    const handleChange = (data: { name: string, value: any }) => {
        setcredentials({ ...credentials, [data.name]: data.value })
    }

    const handleRememberMe = (event: React.ChangeEvent<HTMLInputElement>) => {
        setrememberMe(event.target.checked);
    }

    return (
        <form
            onSubmit={handleSubmit}
            style={{
                width: '100%',
                padding: 0,
                display: 'flex',
                flexDirection: 'column'
            }}>

            <CustomTextField
                onChange={handleChange}
                label='Correo Electronico'
                name={'email'}
                required
                type='email' />
            <CustomTextField
                onChange={handleChange}
                label='Contraseña'
                name={'password'}
                required
                type='password' />

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: 2
                }}>
                <FormControlLabel
                    sx={{
                        fontSize: '0.75rem'
                    }}
                    control={<Checkbox onChange={handleRememberMe} value={rememberMe} />}
                    label="Recuerdame" />
                <Link to={'/login'}><Typography>¿Olvidaste tu contraseña?</Typography></Link>
            </Box>

            <CustomButton
                type='submit'
                text='Acceder' />
        </form>
    )
}

export default LoginForm