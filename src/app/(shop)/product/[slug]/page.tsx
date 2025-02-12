import { Product } from "@/interfaces";
import { products } from "@/seed/seed";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Props {
    params: { slug: string }
}


export default async function ProductPage({ params }: Props) {

    const { slug } = params;

    const product: Product | undefined = products.find(product => product.slugName === slug)

    const relatedProducts = products.filter(pd => pd.category === product?.category)

    console.log(product);


    if (!product) notFound()

    return (
        <div className="max-w-5xl mx-auto ">

            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-28 p-10 md:pt-16 px-2">
                <div className="w-full h-full grid md:col-span-1 gap-2">
                    <Image
                        src={product.image}
                        alt={product.name}
                        width={500}
                        height={500}
                        className="w-full min-h-[300px] h-auto object-cover"
                    ></Image>
                    <div className="w-full h-20 grid grid-cols-5 gap-2 pt-2">
                        <div className="h-full w-full bg-slate-300">
                        </div>
                        <div className="h-full w-full bg-slate-300">
                        </div>
                    </div>
                </div>
                <div className="w-full grid md:col-span-1" >
                    <div className="w-full px-2 flex flex-col gap-2 justify-between">
                        <div className="flex flex-col gap-6">
                            <div className="flex justify-between">
                                <h1 className="text-3xl font-bold">{product.name}</h1>
                                <p className="text-2xl">{`$ ${product.price}`}</p>
                            </div>
                            <p>Category: <Link href={`/category/${product.slugCategory}`} className="font-bold">
                                {
                                    product.category
                                }
                            </Link>
                            </p>
                            <div>
                                <p className="text-lg">{product.description}</p>
                                <p className="text-lg">{product.description}</p>
                                <p className="text-lg">{product.description}</p>
                            </div>
                        </div>
                        <div className="w-full flex flex-row gap-3 h-12 justify-center items-center m-2">
                            <input type="number" className="p-2 w-20 h-full rounded-md text-center" defaultValue={1} />
                            <button className="w-full h-full bg-gray-800 text-white rounded-md">Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>

            {
                relatedProducts.length <= 1 ? null :<div className="w-full p-2">
                <h4 className="text-2xl font-bold">Related products</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-4">
                    {
                        relatedProducts.map(product => (
                            <Link key={product.slugName} href={`/product/${product.slugName}`} className="w-full h-full grid gap-2">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    width={500}
                                    height={500}
                                    className="w-full min-h-[200px] h-auto object-cover"
                                ></Image>
                            </Link>
                        ))
                    }
                </div>
            </div>
            }

            
        </div>

    );
}