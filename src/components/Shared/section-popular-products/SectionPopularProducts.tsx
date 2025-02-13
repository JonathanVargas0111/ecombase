
import { ProductGrid } from "@/components";
import { Product } from "@/interfaces/products.interface";

type SectionPopularProductsProps = {
    products: Product[];
};

export function SectionPopularProducts({ products }: SectionPopularProductsProps) {
    return (
        <div className="container my-16 px-3 mx-auto">
            <div className="flex items-end justify-between">
                <h2 className="text-lg font-semibold md:text-2xl">Popular Products</h2>
                <a href="/products" className="text-primary">View All</a>
            </div>
            <ProductGrid products={products} />
        </div>
    );
}

export default SectionPopularProducts;