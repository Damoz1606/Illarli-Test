interface ProductRQRS {
    id?: number,
    name: string,
    price: number,
    observation: string,
    size: ProductSize;
}

declare type ProductSize = "s" | "m" | "l";

export type { ProductRQRS, ProductSize }