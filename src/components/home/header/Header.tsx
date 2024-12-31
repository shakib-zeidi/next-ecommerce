"use client";

import { FC } from "react";
import Logo from "./logo";
import DesktopMenuItems from "./desktop/desktopMenuItems";
import MobileRegisterButton from "./mobile/mobileRegisterButton";
import DesktopAuthButtons from "./desktop/desktopAuthButtons";
import MobileMenu from "./mobile/mobilemMenu";
import MobileMenuButton from "./mobile/mobileMenuButton";
import MobileOverlay from "./mobile/mobileOverlay";
import useMenu from "@/hooks/header/useMenu";

const Header: FC = () => {
    const {isOpen, toggleMenu, handleLinkClick } = useMenu();

    return (
        <header className="flex justify-between items-center p-5 border-b h-16 xl:h-20 xl:p-12">
            <div className="flex items-center">
                {/* Mobile Menu Button */}
                <MobileMenuButton toggleMenu={toggleMenu} />
                {/* Logo */}
                <Logo />
                {/* Desktop Menu Items */}
                <DesktopMenuItems />
            </div>
            {/* Mobile Button */}
            <MobileRegisterButton />
            {/* Desktop Buttons */}
            <DesktopAuthButtons />
            {/* Mobile Overlay */}
            <MobileOverlay isOpen={isOpen} handleOverlayClick={handleLinkClick} />
            {/* Mobile Menu */}
            <MobileMenu isOpen={isOpen} handleLinkClick={handleLinkClick} />
        </header>
    );
};

export default Header;
