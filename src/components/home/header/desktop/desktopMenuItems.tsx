import Link from "next/link";
import { FC } from "react";

const DesktopMenuItems: FC = () => {
    return (
        <>
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
        </>
    );
};

export default DesktopMenuItems;
