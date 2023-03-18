import { Box, Tab, Tabs } from '@mui/material'
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid'
import CustomDataTable from 'components/atoms/CustomDataTable'
import CustomTabs from 'components/molecules/CustomTabs'
import React, { useEffect, useState } from 'react'
import { ProductRQRS } from 'services/dto/ProductRQRS'
import { ProductService } from 'services/Product.Service'
import ProductPage from './ProductPage'
import CategoryPage from './CategoryPage'

const tabs = [{
  name: "Productos",
  value: 1
},
{
  name: "Categorias",
  value: 2
}];

const Home = () => {

  const [currentTab, setcurrentTab] = useState(1);

  const handleChange = (value: number) => {
    setcurrentTab(value);
  }

  return (
    <Box sx={{
      width: '100%',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative'
    }}>
      <div
        style={{
          position: 'absolute',
          top: 0
        }}>
        <CustomTabs
          items={tabs}
          onChange={handleChange} />
      </div>
      {currentTab === 1 && <ProductPage />}
      {currentTab === 2 && <CategoryPage />}
    </Box>
  )
}

export default Home