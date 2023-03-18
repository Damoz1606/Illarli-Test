import { Add } from '@mui/icons-material';
import { AlertColor } from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';
import CustomDataTable from 'components/atoms/CustomDataTable'
import CustomFloatingButton from 'components/atoms/CustomFloatingButton';
import CustomSnackbar from 'components/atoms/CustomSnackbar';
import CustomModal from 'components/molecules/CustomModal';
import ProductForm from 'components/organisms/ProductForm';
import React, { useEffect, useState } from 'react'
import { ProductRQRS } from 'services/dto/ProductRQRS';
import { ProductService } from 'services/Product.Service';

const columns: GridColDef[] = [
    { field: 'name', headerName: 'Nombre', width: 125, headerAlign: 'center', align: 'center' },
    { field: 'price', headerName: 'Precio', width: 125, headerAlign: 'center', align: 'center' },
    { field: 'observation', headerName: 'Observación', width: 125, headerAlign: 'center', align: 'center' },
    { field: 'size', headerName: 'Tamaño', width: 125, headerAlign: 'center', align: 'center' },
];

const ProductPage = () => {

    const [products, setproducts] = useState<ProductRQRS[]>([]);
    const [openProductForm, setopenProductForm] = useState(false);
    const [selectedProduct, setselectedProduct] = useState<ProductRQRS | undefined>(undefined);
    const [openMessage, setopenMessage] = useState<boolean>(false);
    const [textMessage, settextMessage] = useState<string>("");
    const [colorMessage, setcolorMessage] = useState<AlertColor>('error');

    useEffect(() => {
        getAllProducts();
        return () => { }
    }, []);


    const handleAddClick = () => {
        setopenProductForm(true);
    }

    const handleSubmit = async (data: ProductRQRS) => {
        try {
            if (selectedProduct) {
                const updateProduct = await ProductService.patchProducts({
                    ...data,
                    id: selectedProduct.id
                });
                setproducts(products.map(product => {
                    if (updateProduct.id === product.id) {
                        return updateProduct;
                    }
                    return product;
                }));
            } else {
                const newProduct = await ProductService.postProducts(data);
                products.push(newProduct);
            }
            handleClose();
        } catch (error: any) {
            setopenMessage(true);
            settextMessage("Ha ocurrido un error");
            setcolorMessage("error");
        }
    }

    const handleModify = (data: any) => {
        const selectedRow = products.find(product => product.id === data);
        if (selectedRow) {
            setselectedProduct(selectedRow);
            setopenProductForm(true);
        }
    }

    const handleDelete = (data: any[]) => {
        setopenMessage(true);
        settextMessage("Esta funcionalidad no se encuentra disponible");
        setcolorMessage("info");
    }

    const handleClose = () => {
        setopenProductForm(false);
        setselectedProduct(undefined);
    }

    const getAllProducts = async () => {
        try {
            const retriveData = await ProductService.getProducts();
            setproducts(retriveData);
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
                    title='Productos'
                    columns={columns}
                    rows={products}
                    rowsPerPage={5}
                    onDelete={handleDelete}
                    onRowClick={handleModify}
                    checkboxSelection />
            </div>
            <CustomFloatingButton
                onClick={handleAddClick}
                variant='primary'
                icon={<Add />}
                position='bottom-right' />

            <CustomModal
                open={openProductForm}
                onClose={handleClose}
                title={selectedProduct ? 'Actualicemos el producto' : 'Creemos un nuevo producto'}>
                <ProductForm
                    data={selectedProduct}
                    onDismiss={handleClose}
                    onSubmit={handleSubmit} />
            </CustomModal>

            <CustomSnackbar
                onClose={() => setopenMessage(false)}
                text={textMessage}
                open={openMessage}
                color={colorMessage} />
        </>
    )
}

export default ProductPage