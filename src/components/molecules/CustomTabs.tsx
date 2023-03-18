import { Box, Tabs, Tab } from '@mui/material';
import React from 'react'

interface CustomTabsProps {
    items: { name: string, value: number }[],
    onChange?: (value: number) => void;
}

const CustomTabs = (props: CustomTabsProps) => {
    const [value, setValue] = React.useState(props.items[0].value);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
        props.onChange?.(newValue);
    };

    return (
        <>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    {
                        props.items.map((data, index) => {
                            return <Tab key={index} label={data.name} value={data.value} />
                        })
                    }
                </Tabs>
            </Box>
        </>
    )
}

export default CustomTabs