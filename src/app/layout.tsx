"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import { ShoppingCartProvider } from "./context/ShoppingCartProvider";
import Nav from "../components/Nav";
import NavMenu from "@/components/NavMenu";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Footer from "@/components/Footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const inter = Inter({ subsets: ["latin"] });

const metadata = {
    title: "Acciones El País Tarija",
    description:
        "Compra acciones de nuestra empresa para formar parte de nosotros",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [navMenu, setNavMenu] = useState(false);
    return (
        <QueryClientProvider client={queryClient}>
            <html lang="en">
                <meta charSet="UTF'8" />
                <link rel="icon" href="./favicon.ico" />
                <title>Acciones El País Tarija</title>
                <ShoppingCartProvider>
                    <body className={inter.className}>
                        <AnimatePresence>
                            {navMenu && <NavMenu setNavMenu={setNavMenu} />}
                        </AnimatePresence>
                        <Nav setNavMenu={setNavMenu} />
                        {children}
                        <Footer />
                    </body>
                </ShoppingCartProvider>
            </html>
        </QueryClientProvider>
    );
}
