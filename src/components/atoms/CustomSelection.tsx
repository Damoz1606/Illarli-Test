import { FormControl, FormHelperText, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import React, { useEffect } from 'react'

interface CustomSelectionProps {
    name: string,
    label?: string,
    textarea?: boolean,
    value?: any,
    placeholder?: string,
    required?: boolean,
    type?: React.HTMLInputTypeAttribute | undefined,
    onChange?: (data: any) => void;
    defaultValue?: any,
    items: [{
        label: string,
        value: any
    }]
}

const CustomSelection = (props: CustomSelectionProps) => {

    useEffect(() => {
        if (props.defaultValue)
            props.onChange?.({
                name: props.name,
                value: props.defaultValue
            });
        return () => { }
    }, [])


    const handleChange = (event: SelectChangeEvent) => {
        props.onChange?.({
            name: props.name,
            value: event.target.value
        });
    };

    return (
        <FormControl sx={{ m: 1, minWidth: 120 }}>
            <Select
                value={props.value}
                label={props.label}
                variant='outlined'
                onChange={handleChange}
                defaultValue={props.defaultValue}
            >
                {
                    props.items.map((data, index) => {
                        return <MenuItem key={index} value={data.value}>{data.label}</MenuItem>
                    })
                }
            </Select>
        </FormControl>
    )
}

export default CustomSelection