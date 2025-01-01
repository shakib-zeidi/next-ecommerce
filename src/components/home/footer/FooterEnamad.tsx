import Image from "next/image";
import { FC } from "react";

const FooterEnamad: FC = () => {
    return (
        <>
            <Image
                alt="Your Company"
                src="/logo.png"
                className="h-36 w-auto"
                width={100}
                height={100}
            />
        </>
    );
};

export default FooterEnamad;
