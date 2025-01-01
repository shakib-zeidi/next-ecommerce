import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import Header from "@/components/home/header/Header";
import Footer from "@/components/home/footer/Footer";

const vazir = Vazirmatn({
    subsets: ["arabic"],
    weight: "300",
});

export const metadata: Metadata = {
    title: "Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fa" dir="rtl">
            <body className={vazir.className}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
