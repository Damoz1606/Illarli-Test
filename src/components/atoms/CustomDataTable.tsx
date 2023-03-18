import { Delete } from '@mui/icons-material';
import { IconButton, Toolbar, Tooltip, Typography } from '@mui/material';
import { DataGrid, GridColDef, GridRowSelectionModel, GridRowsProp } from '@mui/x-data-grid'
import React, { useState } from 'react'

interface CustomDataTableProps {
    columns: GridColDef[],
    rows: GridRowsProp,
    rowsPerPage: number,
    title?: string;
    checkboxSelection?: boolean;
    onDelete?: (data: any[]) => void;
    onRowClick?: (data: any) => void;
}

const CustomDataTable = (props: CustomDataTableProps) => {

    const [pagination, setpagination] = useState({
        pageSize: props.rowsPerPage,
        page: 0
    });

    const [rowSelectionModel, setRowSelectionModel] =
        React.useState<GridRowSelectionModel>([]);

    const handleDelete = () => {
        props.onDelete?.(rowSelectionModel);
        setRowSelectionModel([]);
    }

    const handleRowClick = (data: any) => {
        props.onRowClick?.(data.id);
    }

    return (
        <>
            {
                props.title && <>
                    <Toolbar
                        sx={{
                            pl: { sm: 2 },
                            pr: { xs: 1, sm: 1 },
                        }}
                    >
                        {rowSelectionModel.length > 0 ? (
                            <Typography
                                sx={{ flex: '1 1 100%' }}
                                color="inherit"
                                variant="subtitle1"
                                component="div"
                            >
                                {rowSelectionModel.length} selected
                            </Typography>
                        ) : (
                            <Typography
                                sx={{ flex: '1 1 100%' }}
                                variant="h6"
                                id="tableTitle"
                                component="div"
                            >
                                {props.title}
                            </Typography>
                        )}
                        {rowSelectionModel.length > 0 ? (
                            <Tooltip title="Delete">
                                <IconButton
                                    onClick={handleDelete}>
                                    <Delete />
                                </IconButton>
                            </Tooltip>
                        ) : null}
                    </Toolbar>

                </>
            }
            <DataGrid
                rows={props.rows}
                columns={props.columns}
                pageSizeOptions={[5]}
                paginationModel={pagination}
                onPaginationModelChange={setpagination}
                onRowSelectionModelChange={(newRowSelectionModel) => {
                    setRowSelectionModel(newRowSelectionModel);
                }}
                rowSelectionModel={rowSelectionModel}
                onRowClick={handleRowClick}
                checkboxSelection={!!props.checkboxSelection} />
        </>
    )
}

export default CustomDataTable