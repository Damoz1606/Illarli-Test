import { Box, CircularProgress, Fade, Paper, Typography } from '@mui/material'
import React from 'react'

interface CustomLoaderProps {
    open: boolean;
    text?: string;
    showText?: boolean;
}

const CustomLoader = (props: CustomLoaderProps) => {
    return (
        <Fade in={props.open}>
            <Paper sx={{
                position: 'fixed',
                display: 'flex',
                bottom: '2rem',
                left: '2rem',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                zIndex: 1000,
                padding: 1
            }}
                variant='outlined'>
                <CircularProgress />
                {
                    !!props.showText && <Typography ml={2} >{props.text ? props.text : "Cargando..."}</Typography>
                }
            </Paper>
        </Fade >
    )
}

export default CustomLoader