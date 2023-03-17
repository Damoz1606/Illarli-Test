import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid'
import React, { useState } from 'react'

interface CustomDataTableProps {
    columns: GridColDef[],
    rows: GridRowsProp,
    rowsPerPage: number
}

const CustomDataTable = (props: CustomDataTableProps) => {

    const [pagination, setpagination] = useState({
        pageSize: props.rowsPerPage,
        page: 0
    })

    return (
        <DataGrid
            rows={props.rows}
            columns={props.columns}
            paginationModel={pagination}
            onPaginationModelChange={setpagination} />
    )
}

export default CustomDataTable