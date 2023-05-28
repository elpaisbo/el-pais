"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Libelula from "../../public/images/logos/libelula.jpg";
import useCart from "@/app/hooks/useShoppingCart";

function Pago({ data }: any) {
    const { cart } = useCart();
    const animation = {
        hidden: { x: -10, opacity: 0 },
        visible: { x: 0, opacity: 1 },
        exit: { opacity: 0 },
    };
    const newData = { ...data, acciones: cart };
    return (
        <motion.div
            variants={animation}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="flex flex-col gap-2"
        >
            <h2 className="font-bold text-red-500">Pago</h2>
            <div className="flex gap-2 items-center">
                <p>Libélula Payment</p>
                <Image
                    src={Libelula}
                    alt="Logo Libelula"
                    width={200}
                    height={100}
                />
            </div>
            <button
                onClick={() => console.log(newData)}
                className="bg-red-500 text-white my-4 p-2 w-full justify-self-end rounded-md"
            >
                Realizar el pago
            </button>
            <p>
                Tu data personal será utilizada para procesar tu compra, será
                registrada en el Libro Digital de Accionistas, será objeto de
                verificación y El País S.A. se compromete a no utilizarla para
                ningún otro fin.
            </p>
        </motion.div>
    );
}

export default Pago;
