'use server'
import { products } from "@/seed/seed";

// Función para obtener todos los productos
export const getProducts = async () => products;

// Función para obtener un producto por slug
export const getProductBySlug = async (slug: string) => {
    const products = await getProducts();
    return products.find(product => product.slugName === slug);
};

// Función para obtener productos relacionados por categoría
export const getRelatedProducts = async (category: string | undefined) => {
    if (!category) return [];
    const products = await getProducts();
    return products.filter(product => product.category === category);
};
