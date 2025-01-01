import Link from "next/link";
import { FC } from "react";

const FooterMainMenu: FC = () => {
    return (
        <>
            <h3 className="font-bold text-xl pb-5">سازیتو</h3>
            <ul className="text-gray-500 flex flex-col gap-2">
                <li>
                    <Link href="/">درباره سازیتو</Link>
                </li>
                <li>
                    <Link href="/">تعرفه ها و قیمت ساخت فروشگاه</Link>
                </li>
                <li>
                    <Link href="/">فرصت های شغلی</Link>
                </li>
                <li>
                    <Link href="/">فروش فایل</Link>
                </li>
                <li>
                    <Link href="/">طراحی فروشگاه آنلاین</Link>
                </li>
                <li>
                    <Link href="/">سئوی فروشگاه</Link>
                </li>
            </ul>
        </>
    );
};

export default FooterMainMenu;
