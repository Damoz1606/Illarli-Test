import { Box } from '@mui/material'
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid'
import CustomDataTable from 'components/atoms/CustomDataTable'
import React, { useEffect, useState } from 'react'
import { ProductRQRS } from 'services/dto/ProductRQRS'
import { ProductService } from 'services/Product.Service'

const rows: GridRowsProp = [
  { id: 1, col1: 'Hello', col2: 'World' },
  { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
  { id: 3, col1: 'MUI', col2: 'is Amazing' },
  { id: 3, col1: 'MUI', col2: 'is Amazing' },
  { id: 3, col1: 'MUI', col2: 'is Amazing' },
  { id: 3, col1: 'MUI', col2: 'is Amazing' },
  { id: 3, col1: 'MUI', col2: 'is Amazing' },
  { id: 3, col1: 'MUI', col2: 'is Amazing' },
];

const columns: GridColDef[] = [
  { field: 'col1', headerName: 'Column 1', width: 150 },
  { field: 'col2', headerName: 'Column 2', width: 150 },
];

const Home = () => {

  const [products, setproducts] = useState<ProductRQRS[]>([]);

  useEffect(() => {
    getAllProducts();
    return () => { }
  }, []);

  const getAllProducts = async () => {
    try {
      const retriveData = await ProductService.getProducts();
      console.log(retriveData);
      setproducts(retriveData);
    } catch (error: any) {

    }
  }


  return (
    <Box>
      <div style={{ height: 300, width: '100%' }}>
        <CustomDataTable columns={columns} rows={rows} rowsPerPage={5} />
      </div>
    </Box>
  )
}

export default Home