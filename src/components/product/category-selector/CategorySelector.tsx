'use client'
import { Category } from "@/interfaces"
import { Checkbox } from "../../ui/checkbox"

interface Props {
    categories: Category[]
}

export function CategorySelector({ categories }: Props) {
    return (
        <div className="flex flex-col gap-2">
            <h2 className="font-bold text-xl">Categories</h2>
            <div className="">
                {
                    categories.map((category) => (
                        <div className="flex items-center" key={category.slug}>
                            <Checkbox
                                onClick={() => (console.log('clicked'))}
                                className="w-4 h-4" />
                            <label className="ml-2">{category.name}</label>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}