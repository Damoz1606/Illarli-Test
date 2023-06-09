import axios from "axios";
import { ProductRQRS } from "./dto/ProductRQRS";
import EventsApi from "config/apis/EventsApi";
import { AUTHORIZATION_CONFIGURATION } from "utils/AuthorizationUtils";

class ProductService {

    public static async getProducts() {
        try {
            const response = (await axios.get<{ data: ProductRQRS[] }>(EventsApi.API_GET_PRODUCTS(), AUTHORIZATION_CONFIGURATION())).data;
            if (!response) throw ("Products not found");
            const data = response.data;
            if (!response) throw ("Products not found");
            return data;
        } catch (error: any) {
            throw error;
        }
    }

    public static async getProductByID(id: number) {
        try {
            const response = (await axios.get<{ data: ProductRQRS }>(EventsApi.API_GET_PRODUCT(id), AUTHORIZATION_CONFIGURATION())).data;
            if (!response) throw ("Product not found");
            const data = response.data;
            if (!response) throw ("Product not found");
            return data;
        } catch (error: any) {
            throw error;
        }
    }

    public static async postProducts(product: ProductRQRS) {
        try {
            const response = (await axios.post<{ data: ProductRQRS }>(EventsApi.API_POST_PRODUCT(product),
                {
                    name: product.name,
                    observation: product.observation,
                    price: product.price,
                    size: product.size
                },
                AUTHORIZATION_CONFIGURATION())).data;
            if (!response) throw ("Something went wrong");
            const data = response.data;
            if (!data) throw ("Something went wrong");
            return data;
        } catch (error: any) {
            throw error;
        }
    }

    public static async patchProducts(product: ProductRQRS) {
        try {
            const response = (await axios.patch<{ data: ProductRQRS }>(EventsApi.API_PATCH_PRODUCT({
                ...product,
                id: product.id as number
            }),
                product,
                AUTHORIZATION_CONFIGURATION())).data;
            if (!response) throw ("Something went wrong");
            const data = response.data;
            if (!data) throw ("Something went wrong");
            return data;
        } catch (error: any) {
            throw error;
        }
    }

}

export { ProductService }