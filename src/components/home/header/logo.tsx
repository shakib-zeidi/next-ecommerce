import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

const Logo: FC = () => {
    return (
        <>
            <Image
                alt="Your Company"
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                className="h-7 w-auto pr-5"
                width={10}
                height={10}
            />
            <Link href="/" className="pr-2 font-bold text-lg text-gray-700">
                لوگو سایت
            </Link>
        </>
    );
};

export default Logo;
