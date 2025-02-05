import { Logo } from "../../Logo";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
    DropdownMenuGroup,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link";

export function NavbarMobile() {
    return (
        <div className="p-4 flex justify-between items-center">
            <Logo />
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-align-justify"><path d="M3 12h18" /><path d="M3 18h18" /><path d="M3 6h18" /></svg>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-44">
                    <DropdownMenuLabel>
                        <Link href={"/"}>Home</Link>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        <DropdownMenuItem>
                            <a href={"#products-sections"}>Productos</a>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        <DropdownMenuSub>
                            <DropdownMenuSubTrigger>Categorias</DropdownMenuSubTrigger>
                            <DropdownMenuPortal>
                                <DropdownMenuSubContent>
                                    <DropdownMenuItem>Cat 1</DropdownMenuItem>
                                    <DropdownMenuItem>Cat 2</DropdownMenuItem>
                                    <DropdownMenuItem>Cat 3</DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>All</DropdownMenuItem>
                                </DropdownMenuSubContent>
                            </DropdownMenuPortal>
                        </DropdownMenuSub>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Ofertas y promociones</DropdownMenuItem>
                    <DropdownMenuItem>About</DropdownMenuItem>
                    <DropdownMenuItem>Contact</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}