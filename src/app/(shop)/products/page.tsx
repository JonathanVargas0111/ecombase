'use client'
import { ProductCard } from "@/components";

import { products } from "@/seed/seed";
import { categoriesData as categories } from '@/seed/seed';

import { CategorySelector } from "@/components";


export default function Page() {
    return (
        <div className="pt-10 px-4 md:px-10">
            <div className="grid grid-cols-1 md:grid-cols-4">
                <div className="px-3 pt-10">
                   <CategorySelector categories={categories} />
                </div>
                <div className="p-5 grid col-span-1 grid-cols-2 md:col-span-3 md:grid md:grid-cols-3 xl:grid-cols-4 gap-4 xl:gap-12">
                    {products.map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))}
                </div>
            </div>
        </div>
    )
}