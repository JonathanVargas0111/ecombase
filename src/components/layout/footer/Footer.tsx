import Image from "next/image";
import {Logo} from "@/components";


export function Footer() {
    return (
        <footer className="bg-white flex flex-col gap-6 items-center justify-center w-full px-5 md:px-16 py-10 md:py-24">

            <div className="w-full max-w-7xl gap-6 grid grid-cols-1 lg:grid-cols-3">
                {/* Logo */}
                <div className="hidden items-center justify-center lg:block lg:col-span-1">
                    <Logo />
                </div>

                {/* Categorías e Información */}
                <div className="gap-6 grid col-span-1 grid-cols-2 sm:grid-cols-3 ">
                    {/* Categorías */}
                    <div className="flex flex-col mx-auto gap-3">
                        <h1 className="text-xl font-medium">Categories</h1>
                        <nav className="flex flex-col gap-2 text-sm">
                            <a href="#" className="hover:underline">
                                Category 1
                            </a>
                            <a href="#" className="hover:underline">
                                Category 2
                            </a>
                            <a href="#" className="hover:underline">
                                Category 3
                            </a>
                        </nav>
                    </div>
                    {/* Productos */}
                    <div className="flex flex-col mx-auto gap-3">
                        <h1 className="text-xl font-medium">Products</h1>
                        <nav className="flex flex-col gap-2 text-sm">
                            <a href="#" className="hover:underline">
                                Promotions
                            </a>
                            <a href="#" className="hover:underline">
                                New Products
                            </a>
                            <a href="#" className="hover:underline">
                                Top rated
                            </a>
                        </nav>
                    </div>

                    {/* Información */}
                    <div className="flex flex-col mx-auto gap-3">
                        <h1 className="text-xl font-medium">Information</h1>
                        <nav className="flex flex-col gap-2 text-sm">
                            <a href="#" className="hover:underline">
                                About
                            </a>
                            <a href="#" className="hover:underline">
                                Contact
                            </a>
                            <a href="#" className="hover:underline">
                               {`
                                FAQ's
                               `}
                            </a>
                        </nav>
                    </div>
                </div>

                {/* Redes Sociales */}
                <div className="flex flex-col gap-3 col-span-2 lg:col-span-1 items-center text-center">
                    <h1 className="text-xl font-medium">Follow us</h1>
                    <p className="text-sm text-gray-600">
                        Stay updated on our latest news and promotions.
                    </p>

                    <div className="flex gap-4 pt-3 flex-col text-sm md:flex-row">

                        <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline">
                            <Image src="/globe.svg" alt="Social icon" width={16} height={16} />
                            Social 1
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline">
                            <Image src="/globe.svg" alt="Social icon" width={16} height={16} />
                            Social 2
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline">
                            <Image src="/globe.svg" alt="Social icon" width={16} height={16} />
                            Social 3
                        </a>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="w-full max-w-7xl text-sm text-gray-500 mt-6 border-t border-gray-200 pt-6">
                <a href="#" target="_blank" rel="noopener noreferrer">
                    © 2025 Felipe Vargas
                </a>
            </div>
        </footer>

    );
}