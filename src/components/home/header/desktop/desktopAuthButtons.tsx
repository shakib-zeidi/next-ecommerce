import Link from "next/link";
import { FC } from "react";

const DesktopAuthButtons: FC = () => {
    return (
        <>
            <div className="hidden xl:flex xl:gap-5 space-x-4">
                <Link href="/auth/login">
                    <button className="px-4 py-2 hover:text-indigo-500 transition font-bold rounded text-gray-700 bg-white">
                        ورود
                    </button>
                </Link>
                <Link href="/auth/register">
                    <button className="px-4 py-2 rounded text-white bg-indigo-500">
                        ساخت فروشگاه
                    </button>
                </Link>
            </div>
        </>
    );
};

export default DesktopAuthButtons;
