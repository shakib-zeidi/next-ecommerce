import Link from "next/link";
import { FC } from "react";

const FooterTerms: FC = () => {
    return (
        <>
            <h3 className="font-bold text-xl pb-5">شرایط و قوانین</h3>
            <ul className="text-gray-500 flex flex-col gap-2">
                <li>
                    <Link href="/">قوانین و شرایط استفاده</Link>
                </li>
                <li>
                    <Link href="/">حفظ اطلاعات و حریم خصوصی کاربران</Link>
                </li>
            </ul>
        </>
    );
};

export default FooterTerms;
