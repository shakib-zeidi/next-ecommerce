import Link from "next/link";
import { FC } from "react";

const MobileRegisterButton: FC = () => {
    return (
        <>
            <div className="block xl:hidden">
                <Link href="/auth/register">
                    <button className="text-white font-medium bg-indigo-500 p-2 rounded">
                        رایگان شروع کن
                    </button>
                </Link>
            </div>
        </>
    );
};

export default MobileRegisterButton;
