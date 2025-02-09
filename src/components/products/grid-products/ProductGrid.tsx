import { Product } from "@/interfaces";
import { ProductCard } from "./ProductCard";

type ProductGridProps = {
    products: Product[];
};

export function ProductGrid({ products }: ProductGridProps) {
    return (
        <div className="grid gap-8 grid-cols-2 md:grid-cols-4 mt-8 mx-auto">
            {products.map((product, index) => (
                <ProductCard key={index} product={product} />
            ))}
        </div>
    );
}
