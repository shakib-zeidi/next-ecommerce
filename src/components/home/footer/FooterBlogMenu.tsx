import Link from "next/link";
import { FC } from "react";

const FooterBlogMenu: FC = () => {
    return (
        <>
            <h3 className="font-bold text-xl pb-5">پشتیبانی و آموزش</h3>
            <ul className="text-gray-500 flex flex-col gap-2">
                <li>
                    <Link href="/">آموزش</Link>
                </li>
                <li>
                    <Link href="/">وبلاگ</Link>
                </li>
                <li>
                    <Link href="/">نمونه فروشگاه ها</Link>
                </li>
                <li>
                    <Link href="/">ارتباط با ما و پشتیبانی</Link>
                </li>
                <li>
                    <Link href="/">سوالات متداول</Link>
                </li>
            </ul>
        </>
    );
};

export default FooterBlogMenu;
