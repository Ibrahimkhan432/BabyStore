export type Product = {
    id: number;
    slug: string;
    price: number;
    title: string;
    description: string;
    image: string;
    category?: string;
};

export type ProductCategory = {
    id: number;
    slug: string;
    name: string;
    description: string;
    image: string;
    products: Product[];
}