"use client";
import { useState } from "react";
import Button from "./Button";
import { IconoirProvider, Cart } from "iconoir-react";

function Carrito() {
    const [carrito, setCarrito] = useState(0);
    function agregar() {
        setCarrito(carrito + 1);
    }
    function quitar() {
        setCarrito((carrito) => (carrito > 0 ? carrito - 1 : 0));
    }
    return (
        <div className="flex gap-4">
            <div
                className="grid grid-cols-3 place-items-center border-2 border-red-500 rounded-md"
                z-10
            >
                <Button text="-" onClick={quitar} />
                <p className="text-center">{carrito}</p>
                <Button text="+" onClick={agregar} />
            </div>
            <button className="bg-red-500 flex items-center p-4 rounded-md text-white gap-2">
                <IconoirProvider>
                    <Cart />
                </IconoirProvider>
                Añadir al carrito
            </button>
        </div>
    );
}

export default Carrito;
