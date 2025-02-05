type Product = {
    name: string;
    image: string;
    price: number;
    description: string;
    link: string;
    category: string;
    rating: number;
    discount?: number;
};

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
            {/* <!-- Popular Products --> */}
            <div className="grid gap-8 grid-cols-2 md:grid-cols-4 mt-8 mx-auto">
                {products.map((product, index) => (
                    <div key={index} className="relative group w-full">
                        <a href={product.link} className="" title={product.name}>
                            <span className="red-badge absolute top-2 right-2" data-v-e0e8aa2a="">{product.discount} %</span>
                            <img
                                className="h-60 rounded-lg object-top object-cover w-full aspect-9/8"
                                alt={product.name}
                                title={product.name}
                                src={product.image} />  {/* Cambiar por product.image */}
                        </a>

                        <div className="p-2">
                            {/* <div className="inline-flex items-center">
                                <span className="iconify i-ion:star mr-[2px] text-sm text-amber-500" aria-hidden="true" ></span>
                                <span className="iconify i-ion:star mr-[2px] text-sm text-amber-500" aria-hidden="true" ></span>
                                <span className="iconify i-ion:star mr-[2px] text-sm text-amber-500" aria-hidden="true" ></span>
                                <span className="iconify i-ion:star mr-[2px] text-sm text-amber-500" aria-hidden="true" ></span>
                                <span className="iconify i-ion:star mr-[2px] text-sm text-gray-300" aria-hidden="true" ></span>

                                <span className="text-xs ml-1 text-gray-500">(1)</span>
                            </div> */}
                            <a href={product.link} className="" title={product.name}>
                                <h2 className="mb-2 font-light leading-tight group-hover:text-primary">{product.name}</h2>
                            </a>
                            <div className="flex font-semibold text-sm">
                                <span className="text-gray-400 line-through font-normal">€50.00</span>
                                <span className="ml-2">€{product.price}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}