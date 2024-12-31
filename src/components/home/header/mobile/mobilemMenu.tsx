import Link from "next/link";
import { FC } from "react";

interface MobileMenuProps {
    isOpen: boolean;
    handleLinkClick: () => void;
}

const MobileMenu: FC<MobileMenuProps> = ({ isOpen, handleLinkClick }) => {
    return (
        <div
            className={`fixed top-0 right-0 w-4/5 h-full bg-white shadow-lg transition-transform duration-300 z-50 ${
                isOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
            <ul className="p-5 pr-10 pt-10">
                <li className="py-2">
                    <Link href="/" onClick={handleLinkClick}>
                        صفحه اصلی
                    </Link>
                </li>
                <li className="py-2">
                    <Link href="/pricing" onClick={handleLinkClick}>
                        تعرفه ها
                    </Link>
                </li>
                <li className="py-2">
                    <Link href="/customers" onClick={handleLinkClick}>
                        نمونه فروشگاه ها
                    </Link>
                </li>
                <li className="py-2">
                    <Link href="/booking" onClick={handleLinkClick}>
                        سایت نوبت دهی
                    </Link>
                </li>
                <li className="py-2">
                    <Link href="/" onClick={handleLinkClick}>
                        پنل بازاریابی
                    </Link>
                </li>
                <li className="py-2">
                    <Link href="/blog" onClick={handleLinkClick}>
                        وبلاگ
                    </Link>
                </li>
                <li className="py-2">
                    <Link href="/auth/login" onClick={handleLinkClick}>
                        ورود
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default MobileMenu;
