import { notFound } from "next/navigation";

import { products } from '@/seed/seed';
import { categoriesData } from '@/seed/seed';

import { Categories } from "@/interfaces";

import { ProductGrid , Title } from '@/components';

interface Props {
    params: { id: Categories };
}

export default async function ({ params }: Props) {

    const { id } = await params;
    const category = categoriesData.find(category => category.slug === id);

    if (!category && id !== "all") notFound();

    // Determina los productos a mostrar: si es "all", muestra todos; si no, filtra por categoría
    const filteredProducts = id === "all" ? products : products.filter(product => product.slugCategory === id);

    // Título y subtítulo basado en el id
    const title = id === "all" ? "All Products" : category?.name || "Category Not Found";
    const subtitle = id === "all" ? "Explore all available products" : `Explore products in the ${category?.name.toLowerCase()}`;

    return (
        <div className="px-5">
            <Title
                title={title}
                subtitle={subtitle}
                className="mb-8"
            />

            <ProductGrid products={filteredProducts} />
        </div>
    )
}

