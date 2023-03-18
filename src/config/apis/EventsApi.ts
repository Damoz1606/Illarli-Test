import EnvVariable from "config/EnvVariable";
import { ProductSize } from "services/dto/ProductRQRS";


const API_POST_LOGIN = (credentials: { email: string, password: string }) =>
    `${EnvVariable.EVENTS_URI}/api/login?email=${credentials.email}&password=${credentials.password}`;

const API_GET_CATEGORIES = () =>
    `${EnvVariable.EVENTS_URI}/api/categories`;

const API_GET_CATEGORY = (id: number) =>
    `${EnvVariable.EVENTS_URI}/api/categories/${id}`;

const API_GET_PRODUCTS = () =>
    `${EnvVariable.EVENTS_URI}/api/products`;

const API_GET_PRODUCT = (id: number) =>
    `${EnvVariable.EVENTS_URI}/api/products/${id}`;

const API_POST_PRODUCT = (product: { name: string, price: number, observation: string, size: ProductSize }) =>
    `${EnvVariable.EVENTS_URI}/api/products?name=${product.name}&price=${product.price}&observation=${product.observation}&size=${product.size}`;

const API_PATCH_PRODUCT = (product: { id: number, name: string, price: number, observation: string, size: ProductSize }) =>
    `${EnvVariable.EVENTS_URI}/api/products/${product.id}?name=${product.name}&price=${product.price}&observation=${product.observation}&size=${product.size}`;

export default Object.freeze({
    API_POST_LOGIN,
    API_GET_CATEGORIES,
    API_GET_CATEGORY,
    API_GET_PRODUCTS,
    API_GET_PRODUCT,
    API_POST_PRODUCT,
    API_PATCH_PRODUCT
});