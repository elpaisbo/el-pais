"use client";
import { useState } from "react";
import Button from "./Button";
import { Cart } from "iconoir-react";
import IconoirWrapper from "./IconoirWrapper";
import useCart from "@/app/hooks/useShoppingCart";

function Carrito() {
    const { cart, setCart } = useCart();
    function agregar() {
        setCart((carrito) => carrito + 1);
    }
    function quitar() {
        setCart((carrito) => (carrito > 0 ? carrito - 1 : 0));
    }
    return (
        <div className="flex gap-4">
            <div className="grid grid-cols-3 place-items-center border-2 border-red-500 rounded-md">
                <Button text="-" onClick={quitar} />
                <p className="text-center">{cart}</p>
                <Button text="+" onClick={agregar} />
            </div>
            <button className="bg-red-500 flex items-center p-4 rounded-md text-white gap-2">
                <IconoirWrapper>
                    <Cart />
                </IconoirWrapper>
                Añadir al carrito
            </button>
        </div>
    );
}

export default Carrito;
