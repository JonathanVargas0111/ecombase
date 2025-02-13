import Image from "next/image";
import Link from "next/link";

type Category = {
    name: string;
    image: string;
    link: string;
};

type SectionCategoriesProps = {
    categoriesData: Category[];
};

export function SectionCategories({ categoriesData }: SectionCategoriesProps) {
    return (
        <section className="container my-16 px-3 mx-auto">
            <div className="flex items-end justify-between">
                <h2 className="text-lg font-bold md:text-2xl">Shop by Category</h2>
                <Link href="/categories" className="text-primary" >View All</Link>
            </div>
            <div className="h-72 grid justify-center grid-cols-2 gap-4 mt-8 md:grid-cols-3 lg:grid-cols-6">
                {
                    categoriesData.map((category, index) => (
                        <Link href={category.link} key={index} className="relative flex justify-center overflow-hidden border border-white rounded-xl item snap-mandatory snap-x w-full">
                            <Image
                                src={category.image}
                                alt="static-banner"
                                className="absolute inset-0 object-cover w-full h-full"
                                width={500}
                                height={500}
                            />
                            <div className="absolute inset-x-0 bottom-0 opacity-50 bg-gradient-to-t from-black to-transparent h-1/2"></div>
                            <span className="relative z-10 mt-auto mb-2 text-sm font-semibold text-white capitalize md:text-base md:mb-4">{category.name}</span>
                        </Link>
                    ))
                }
            </div>
        </section>
    );
}