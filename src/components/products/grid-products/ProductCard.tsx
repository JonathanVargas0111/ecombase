import Link from "next/link";

type ProductProps = {
    product: {
        name: string;
        image: string;
        price: number;
        description: string;
        link: string;
        category: string;
        rating: number;
        discount?: number;
        slugCategory: string;
        slugName: string;
    }
};

export function ProductCard({ product }: ProductProps) {
    return (
        <div className="relative group w-full">
            <Link href={`/product/${product.slugName}`} className="" title={product.name}>
                {
                    product.discount ?
                        <span className="absolute bg-red-400 rounded-md p-1 text-white text-sm top-2 right-2" data-v-e0e8aa2a="">{product.discount} %</span>
                        : null
                }
                <img
                    className="h-60 rounded-lg object-top object-cover w-full aspect-9/8"
                    alt={product.name}
                    title={product.name}
                    src={product.image} />  {/* Cambiar por product.image */}
            </Link>

            <div className="p-2">
                <p className="mb-2 font-light text-sm">{product.category}</p>
                <Link href={`/product/${product.slugName}`} className="" title={product.name}>
                    <h2 className="mb-2 font-light leading-tight group-hover:text-primary">{product.name}</h2>
                </Link>
                {
                    product.discount ?
                        <div className="flex font-semibold text-sm">
                            <span className="text-gray-400 line-through font-normal">€{product.price}</span>
                            <span className="ml-2">€{product.price - (product.price * (product.discount / 100))}</span>
                        </div>
                        :
                        <div className="flex font-semibold text-sm">
                            <span className="ml-2">€{product.price}</span>
                        </div>
                }
            </div>
        </div>
    )
}