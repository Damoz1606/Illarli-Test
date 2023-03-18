import { Alert, AlertColor, Snackbar } from '@mui/material'
import React from 'react'

interface CustomSnackbarProps {
    text: string;
    open: boolean;
    color?: AlertColor;
    onClose?: () => void;
}

const CustomSnackbar = (props: CustomSnackbarProps) => {
    return (
        <Snackbar
            open={props.open}
            autoHideDuration={1000}
            onClose={props.onClose}>
            <Alert
                onClose={props.onClose}
                severity={props.color}
                sx={{ width: '100%' }}>
                {props.text}
            </Alert>
        </Snackbar>
    )
}

export default CustomSnackbar