import { Modal, Backdrop, Fade, Box, Typography, Paper } from '@mui/material'
import React, { ReactNode, useState } from 'react'

interface CustomModalProps {
    children: ReactNode;
    open: boolean;
    onClose: () => void;
    title?: string;
}

const CustomModal = (props: CustomModalProps) => {

    const handleClose = () => {
        props.onClose?.();
    }

    return (
        <Modal
            open={props.open}
            onClose={handleClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{ backdrop: { timeout: 500, }, }}
        >
            <Fade in={props.open}>
                <Paper sx={{
                    position: 'absolute' as 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    p: 4,
                }}
                variant='outlined'>
                    {props.title && <Typography variant="h6" component="h2">
                        {props.title}
                    </Typography>}
                    <Typography sx={{ mt: 2 }}>
                        {props.children}
                    </Typography>
                </Paper>
            </Fade>
        </Modal>
    )
}

export default CustomModal