import { AlertColor } from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';
import CustomDataTable from 'components/atoms/CustomDataTable';
import CustomSnackbar from 'components/atoms/CustomSnackbar';
import React, { useEffect, useState } from 'react'
import { CategoryService } from 'services/Category.Service';
import { CategoryRS } from 'services/dto/CategoryRS';

const columns: GridColDef[] = [
  { field: 'name', headerName: 'Nombre', width: 200, headerAlign: 'center', align: 'center' },
  { field: 'observation', headerName: 'Observación', width: 300, headerAlign: 'center', align: 'center' },
];

const CategoryPage = () => {

  const [categories, setcategories] = useState<CategoryRS[]>([])
  const [openMessage, setopenMessage] = useState<boolean>(false);
  const [textMessage, settextMessage] = useState<string>("");
  const [colorMessage, setcolorMessage] = useState<AlertColor>('error');

  useEffect(() => {
    getAllCategories();
    return () => { }
  }, []);

  const getAllCategories = async () => {
    try {
      const retriveData = await CategoryService.getCategories();
      setcategories(retriveData);
    } catch (error: any) {
      setopenMessage(true);
      settextMessage("Ha ocurrido un error");
      setcolorMessage("error");
    }
  }

  return (
    <>
      <div style={{ height: 400, width: '100%', maxWidth: 600 }}>
        <CustomDataTable
          title='Categorias'
          columns={columns}
          rows={categories}
          rowsPerPage={5} />
      </div>
      <CustomSnackbar
        onClose={() => setopenMessage(false)}
        text={textMessage}
        open={openMessage}
        color={colorMessage} />
    </>
  )
}

export default CategoryPage