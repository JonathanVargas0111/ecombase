import { Logo } from "../Logo";
import { NavbarDesktop } from "./NavbarDesktop";
import { NavbarMobile } from "./NavbarMobile";

export function Navbar() {
    return (
        <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
            <div className="md:hidden">
                <NavbarMobile />
            </div>
            <div className="hidden mx-auto md:block">
                <NavbarDesktop />
            </div>
        </nav>
    )
}