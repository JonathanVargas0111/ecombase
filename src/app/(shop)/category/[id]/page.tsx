import { notFound } from "next/navigation";

import { Category, Product } from "@/interfaces";

import { getCategories, getCategoryBySlug, getProducts } from "@/actions";

import { ProductGrid, SectionCategories, Title } from '@/components';

type Props = {
    params: Promise<{ id: string }>;
};

export default async function CategoryPage({ params }: Props) {

    const { id } = await params;
    const categoriesData = await getCategories()

    const products: Product[] | [] = await getProducts()

    const category: Category | undefined = await getCategoryBySlug(id)

    if (!category && id !== "all") notFound();

    // Determina los productos a mostrar: si es "all", muestra todos; si no, filtra por categoría
    const filteredProducts = id === "all" ? products : products.filter(product => product.slugCategory === id);

    // Título y subtítulo basado en el id
    const title = id === "all" ? "All Products" : category?.name || "Category Not Found";
    const subtitle = id === "all" ? "Explore all available products" : `Explore products in the ${category?.name.toLowerCase()}`;

    return (
        <div className="px-5">
            {
                id !== "all" ?
                    <div>
                        <Title
                            title={title}
                            subtitle={subtitle}
                            className="mb-8"
                        />
                        <ProductGrid products={filteredProducts} />
                    </div>
                    :
                    <SectionCategories categoriesData={categoriesData} />
            }
        </div>
    )
}

