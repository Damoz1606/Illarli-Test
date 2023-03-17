interface ProductRQRS {
    id?: number,
    name: string,
    price: number,
    observation: string,
    size: ProductSize;
}

declare type ProductSize = "S" | "M" | "L";

export type { ProductRQRS, ProductSize }