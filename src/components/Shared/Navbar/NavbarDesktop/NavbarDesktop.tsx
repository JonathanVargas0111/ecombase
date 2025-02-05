'use client'
import { Logo } from "@/components/Shared/Logo";
import { DropdownMenuSeparator } from "@/components/ui/dropdown-menu";

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
import Link from "next/link";


export function NavbarDesktop() {

    return (
        <div className="flex items-center justify-between px-9 py-3">
            <Logo />
            <NavigationMenu>
                <NavigationMenuList className="flex gap-4">

                    <NavigationMenuItem>
                        <Link href="/docs" legacyBehavior passHref>
                            <NavigationMenuLink className="hover:text-gray-300 transition-all duration-300">
                                Home
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <Link href="/docs" legacyBehavior passHref>
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
                                    <NavigationMenuLink className="min-w-36 p-3">Cate 1</NavigationMenuLink>
                                    <NavigationMenuLink className="min-w-36 p-3">Cate 2</NavigationMenuLink>
                                    <NavigationMenuLink className="min-w-36 p-3">Cate 3</NavigationMenuLink>
                                    <DropdownMenuSeparator />
                                    <NavigationMenuLink className="min-w-36 p-3">All</NavigationMenuLink>
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