import { AttachMoney, Money } from '@mui/icons-material';
import { Box } from '@mui/material';
import CustomButton from 'components/atoms/CustomButton';
import CustomSelection from 'components/atoms/CustomSelection';
import CustomTextField from 'components/atoms/CustomTextField'
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { ProductRQRS } from 'services/dto/ProductRQRS';

interface ProductFormProps {
    data?: ProductRQRS;
    onSubmit?: (data: ProductRQRS) => void;
    onDismiss?: () => void;
}

const items: any = [{
    label: "Largo",
    value: 'l' as any
},
{
    label: "Medio",
    value: 'm' as any
},
{
    label: "Pequeño",
    value: 's' as any
}]

const ProductForm = (props: ProductFormProps) => {

    const [formData, setformData] = useState<ProductRQRS>({
        name: "",
        observation: "",
        price: 0,
        size: 'l',
    });

    useEffect(() => {
        if (props.data)
            setformData(props.data);
        return () => { }
    }, [])


    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event?.preventDefault();
        props.onSubmit?.(formData);
    }

    const handleChange = (data: { name: string, value: any }) => {
        setformData({
            ...formData,
            [data.name]: data.value
        })
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
                label='Nombre'
                name={'name'}
                required
                value={formData.name}
                type='text' />
            <CustomTextField
                onChange={handleChange}
                label='Observación'
                textarea
                name={'observation'}
                required
                value={formData.observation}
                type='text' />
            <CustomTextField
                onChange={handleChange}
                label='Precio'
                name={'price'}
                required
                icon={<AttachMoney />}
                value={formData.price}
                type='number' />
            <CustomSelection
                name={'size'}
                items={items}
                defaultValue={props.data ? props.data.size.toLowerCase() : items[0].value}
                onChange={handleChange}
            />

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-around'
                }}>
                <div style={{ margin: 5, width: '100%' }}>
                    <CustomButton
                        type='button'
                        variant='secondary'
                        text='Cancelar'
                        onClick={props.onDismiss} />
                </div>
                <div style={{ margin: 5, width: '100%' }}>
                    <CustomButton
                        type='submit'
                        text={props.data ? 'Actualizar' : 'Crear'} />
                </div>
            </Box>
        </form>
    )
}

export default ProductForm