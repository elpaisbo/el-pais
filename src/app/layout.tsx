"use client";
import Image from "next/image";
import "./globals.css";
import { Inter } from "next/font/google";
import Logo from "../../public/images/logos/logo.png";
import { IconoirProvider, ShoppingBag } from "iconoir-react";
import useCart from "../../hooks/useShoppingCart";
import { ShoppingCartProvider } from "../../context/ShoppingCartProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Acciones El País Tarija",
    description:
        "Compra acciones de nuestra empresa para formar parte de nosotros",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <ShoppingCartProvider>
                <body className={inter.className}>
                    <Nav />
                    {children}
                </body>
            </ShoppingCartProvider>
        </html>
    );
}

function Nav() {
    const { cart } = useCart();
    return (
        <nav className="flex sticky justify-between py-5 items-center gap-4 px-6 sm:px-16 md:px-20 lg:px-30">
            <div>
                <Image src={Logo} alt="Logo El País" width={200} height={150} />
            </div>
            <div className="relative grid justify-items-center">
                <IconoirProvider
                    iconProps={{
                        width: "3rem",
                        height: "3rem",
                        color: "red",
                        strokeWidth: 1.25,
                    }}
                >
                    <p className="absolute top-1/3 text-red-500 font-bold">
                        {cart}
                    </p>

                    <ShoppingBag />
                </IconoirProvider>
            </div>
        </nav>
    );
}
