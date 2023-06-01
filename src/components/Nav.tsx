"use client";

import NavLink from "@/components/NavLink";
import Logo from "../../public/images/logos/logo.png";
import { IconoirProvider, ShoppingBag, Menu } from "iconoir-react";
import useCart from "../app/hooks/useShoppingCart";
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";
import NavMenu from "./NavMenu";
import { navLinks } from "../app/data/Data";
import Link from "next/link";

type NavProps = {
    setNavMenu: Dispatch<SetStateAction<boolean>>;
};

export default function Nav({ setNavMenu }: NavProps) {
    const { cart } = useCart();
    return (
        <nav className="flex sticky top-0 bg-white-transparent justify-between py-5 items-center gap-4 px-6 sm:px-16 md:px-20 lg:px-30 shadow-md z-10">
            <div>
                <Link href={"https://elpais.bo/"}>
                    <Image
                        src={Logo}
                        alt="Logo El País"
                        width={200}
                        height={150}
                    />
                </Link>
            </div>
            <div className="flex items-center gap-4">
                <div className=" hidden lg:flex items-center gap-2 ">
                    {navLinks.map((link) => (
                        <NavLink key={link.to} text={link.text} to={link.to} />
                    ))}
                </div>
                <div className="flex items-center order-2 pt-2 lg:hidden">
                    <button onClick={() => setNavMenu(true)}>
                        <IconoirProvider
                            iconProps={{
                                width: "2rem",
                                height: "2rem",
                                color: "red",
                                strokeWidth: 1.25,
                            }}
                        >
                            <Menu />
                        </IconoirProvider>
                    </button>
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
            </div>
        </nav>
    );
}
