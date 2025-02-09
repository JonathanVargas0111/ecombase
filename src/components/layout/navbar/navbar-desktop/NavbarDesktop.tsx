'use client'
import Link from "next/link";

import { DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { categoriesData } from '@/seed/seed'

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

import { Logo } from '@/components'

export function NavbarDesktop() {

    return (
        <div className="flex items-center justify-between px-9 py-3">
            <Logo />
            <NavigationMenu>
                <NavigationMenuList className="flex gap-4">

                    <NavigationMenuItem>
                        <Link href="/" legacyBehavior passHref>
                            <NavigationMenuLink className="hover:text-gray-300 transition-all duration-300">
                                Home
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <Link href="/products" legacyBehavior passHref>
                            <NavigationMenuLink className="hover:text-gray-300 transition-all duration-300">
                                Productos
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>

                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
                                <NavigationMenuContent className="flex flex-col gap-2 w-56">
                                    {
                                        categoriesData.map(

                                            category => (
                                                <NavigationMenuLink
                                                    href={category.link}
                                                    key={category.slug}
                                                    className="min-w-36 p-3">
                                                    {category.name}
                                                </NavigationMenuLink>
                                            )
                                        )
                                    }
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>

                    <NavigationMenuItem>
                        <Link href="/docs" legacyBehavior passHref>
                            <NavigationMenuLink className="hover:text-gray-300 transition-all duration-300">
                                Ofertas
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>


                    <NavigationMenuItem>
                        <Link href="/docs" legacyBehavior passHref>
                            <NavigationMenuLink className="hover:text-gray-300 transition-all duration-300">
                                About
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <Link href="/docs" legacyBehavior passHref>
                            <NavigationMenuLink className="hover:text-gray-300 transition-all duration-300">
                                Contact
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>

                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}