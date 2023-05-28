"use client";

import useCart from "@/app/hooks/useShoppingCart";
import { motion } from "framer-motion";

function Resumen() {
    const { cart } = useCart();
    const animation = {
        hidden: { x: -10, opacity: 0 },
        visible: { x: 0, opacity: 1 },
        exit: { opacity: 0 },
    };
    return (
        <motion.div
            variants={animation}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="flex flex-col gap-2"
        >
            <h2 className="text-red-500 font-bold">Resumen</h2>
            <div className="flex justify-between border-b-4 border-gray-200">
                <p className="font-bold">Producto</p>
                <p className="font-bold">Subtotal</p>
            </div>
            <LineaResumen
                nombre={`Acciones ×${cart}`}
                valor={`${cart * 100}.00Bs.`}
            />
            <LineaResumen nombre={`Subtotal`} valor={`${cart * 100}.00Bs.`} />
            <LineaResumen nombre={`Total`} valor={`${cart * 100}.00Bs.`} />
        </motion.div>
    );
}

export default Resumen;

type LineaResumenProps = {
    nombre: string;
    valor: string;
};

function LineaResumen({ nombre, valor }: LineaResumenProps) {
    return (
        <div className="flex justify-between border-b-4">
            <p>{nombre}</p>
            <p>{valor}</p>
        </div>
    );
}
