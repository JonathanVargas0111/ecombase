'use client'
import { ProductCard } from "@/components/Shared/Product/ProductCard";
import { Button } from "@/components/ui/button";
import { products } from "@/data/dataBasic";

import { Filter } from 'lucide-react';
import { categoriesData } from '@/data/dataBasic';


import { Checkbox } from "@/components/ui/checkbox"

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

import { Separator } from "@/components/ui/separator"


export default function Page() {

    const handleCategoryClick = (slug: string) => {
        console.log(`${slug}`);
    };
    return (
        <div className="pt-10 px-4 md:px-10">
            <div className="grid grid-cols-1 md:grid-cols-4">
                <div className="grid col-span-1 px-6">
                    <div className="md:hidden flex flex-between justify-between items-center">
                        <h1 className="">Products</h1>
                        <Sheet>
                            <SheetTrigger>
                                <Filter />
                            </SheetTrigger>
                            <SheetContent side={"left"}>
                                <SheetHeader>
                                    <SheetTitle>Filters</SheetTitle>
                                    <SheetDescription>
                                        <div className="text-sm text-gray-500 py-6">
                                            <h2 className="py-5 text-lg">Cateogries</h2>
                                            <ul className="space-y-2">
                                                {categoriesData.map((category, index) => (
                                                    <li
                                                        key={category.slug}
                                                        className="flex flex-row gap-2 leading-none"
                                                        onClick={() => handleCategoryClick(category.slug)}
                                                    >
                                                        <Checkbox id={category.slug} />
                                                        <label
                                                            htmlFor="terms1"
                                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                        >
                                                            {category.name}
                                                        </label>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </SheetDescription>
                                </SheetHeader>
                            </SheetContent>
                        </Sheet>
                    </div>
                    <div className="hidden md:block">
                        <div className="text-sm text-gray-500 py-6">
                            <h2 className="py-5 text-lg">Cateogries</h2>
                            <ul className="space-y-2">
                                {categoriesData.map((category, index) => (
                                    <li
                                        key={category.slug}
                                        className="flex flex-row gap-2 leading-none"
                                        onClick={() => handleCategoryClick(category.slug)}
                                    >
                                        <Checkbox id={category.slug} />
                                        <label
                                            htmlFor="terms1"
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            {category.name}
                                        </label>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <Separator />
                        <div className="text-sm text-gray-500 py-6">
                            <h2>Other filter</h2>
                            <ul>
                                <li>Filter</li>
                                <li>Filter</li>
                                <li>Filter</li>
                                <li>Filter</li>
                            </ul>
                        </div>
                    </div>
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