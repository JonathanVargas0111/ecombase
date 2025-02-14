'use server'
import { categoriesData } from "@/seed/seed"
import { popularCategories } from "@/seed/seed";


export const getCategories = async () => categoriesData;

export const getCategoryBySlug  = async ( slug: string)=>{
    const categories = await getCategories()
    return categories.find(category => category.slug === slug)
}

export const getPopularCategories = async ()=> popularCategories