import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import FooterMainMenu from "./FooterMainMenu";
import FooterBlogMenu from "./FooterBlogMenu";
import FooterTerms from "./FooterTerms";
import FooterEnamad from "./FooterEnamad";

const Footer: FC = () => {
    return (
        <footer className="flex flex-col items-center gap-10 mb-10 md:mb-28 mt-10 md:flex-row md:justify-around">
            <div className="text-center md:text-right md:flex md:flex-col md:items-start md:h-40">
                <FooterMainMenu />
            </div>
            <div className="text-center md:text-right md:flex md:flex-col md:items-start md:h-40">
                <FooterBlogMenu />
            </div>
            <div className="text-center md:text-right md:flex md:flex-col md:items-start md:h-40">
                <FooterTerms />
            </div>
            <div className="md:flex-col md:items-start md:h-40">
                <FooterEnamad />
            </div>
        </footer>
    );
};

export default Footer;
