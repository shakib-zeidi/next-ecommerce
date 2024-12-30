"use client";

import Image from "next/image";
import Link from "next/link";
import { FC, useState, useEffect, useRef } from "react";

const Header: FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <header className="flex justify-between items-center p-5 border-b h-16 xl:h-20 xl:p-12">
            <div className="flex items-center">
                {/* Mobile Menu Button */}
                <svg
                    onClick={toggleMenu}
                    width="18"
                    height="18"
                    viewBox="0 0 32 32"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="0"
                    className="cursor-pointer block xl:hidden"
                >
                    <path
                        d="M1.524 8.667h28.952c0.842 0 1.524-0.682 1.524-1.524s-0.682-1.524-1.524-1.524h-28.952c-0.842 0-1.524 0.682-1.524 1.524s0.682 1.524 1.524 1.524v0zM1.524 18.141h28.952c0.842 0 1.524-0.682 1.524-1.524s-0.682-1.524-1.524-1.524h-28.952c-0.842 0-1.524 0.682-1.524 1.524s0.682 1.524 1.524 1.524v0zM1.524 27.615h28.952c0.842 0 1.524-0.682 1.524-1.524s-0.682-1.524-1.524-1.524h-28.952c-0.842 0-1.524 0.682-1.524 1.524s0.682 1.524 1.524 1.524v0z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        vectorEffect="non-scaling-stroke"
                    ></path>
                </svg>

                <Image
                    alt="Your Company"
                    src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                    className="h-7 w-auto pr-5"
                    width={10}
                    height={10}
                />
                <Link href="/" className="pr-2 font-bold text-lg text-gray-700">لوگو سایت</Link>

                {/* Desktop Menu Items */}
                <ul className="hidden xl:flex space-x-10 ml-10 mr-20 font-bold">
                    <li className="text-gray-700 hover:text-indigo-500 pl-10">
                        <Link href="/">صفحه اصلی</Link>
                    </li>
                    <li className="text-gray-700 hover:text-indigo-500">
                        <Link href="/pricing">تعرفه ها</Link>
                    </li>
                    <li className="text-gray-700 hover:text-indigo-500">
                        <Link href="/customers">نمونه فروشگاه ها</Link>
                    </li>
                    <li className="text-gray-700 hover:text-indigo-500">
                        <Link href="/booking">سایت نوبت دهی</Link>
                    </li>
                    <li className="text-gray-700 hover:text-indigo-500">
                        <Link href="/">پنل بازاریابی</Link>
                    </li>
                    <li className="text-gray-700 hover:text-indigo-500">
                        <Link href="/blog">وبلاگ</Link>
                    </li>
                </ul>
            </div>

            {/* Mobile Button */}
            <div className="block xl:hidden">
                <Link href="/auth/register">
                    <button className="text-white font-medium bg-indigo-500 p-2 rounded">
                        رایگان شروع کن
                    </button>
                </Link>
            </div>

            {/* Desktop Buttons */}
            <div className="hidden xl:flex xl:gap-5 space-x-4">
                <Link href="/auth/login">
                    <button className="px-4 py-2 hover:text-indigo-500 transition font-bold rounded text-gray-700 bg-white">ورود</button>
                </Link>
                <Link href="/auth/register">
                    <button className="px-4 py-2 rounded text-white bg-indigo-500">ساخت فروشگاه</button>
                </Link>
            </div>

            {/* Mobile Overlay */}
            {isOpen && (
                <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={handleLinkClick} />
            )}

            {/* Mobile Menu */}
            <div
                ref={menuRef}
                className={`fixed top-0 right-0 w-4/5 h-full bg-white shadow-lg transition-transform duration-300 z-50 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
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
        </header>
    );
};

export default Header;
