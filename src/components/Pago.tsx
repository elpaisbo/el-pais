"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Libelula from "../../public/images/logos/libelula.jpg";
import useCart from "@/app/hooks/useShoppingCart";
import { useMutation } from "@tanstack/react-query";
import { postRegister } from "@/request/postRegister";
import UseAnimations from "react-useanimations";
import loading from "react-useanimations/lib/loading";
import { useRouter } from "next/navigation";

function Pago({ data }: any) {
    const { push } = useRouter();
    const { cart } = useCart();
    const animation = {
        hidden: { x: -10, opacity: 0 },
        visible: { x: 0, opacity: 1 },
        exit: { opacity: 0 },
    };
    const newData = { ...data, acciones: cart };
    const mutation = useMutation({
        mutationFn: postRegister,
        onSuccess: (res) => {
            console.log(res.data.url_pasarela_pagos);
            push(res.data.url_pasarela_pagos);
        },
    });

    function handleSubmit() {
        mutation.mutate(newData);
    }

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
                onClick={handleSubmit}
                className="bg-red-500 text-white my-4 p-2 w-full justify-self-end rounded-md"
            >
                {mutation.isLoading ? (
                    <span className="text-white grid place-items-center">
                        <UseAnimations
                            animation={loading}
                            size={24}
                            fillColor="#fff"
                        />
                    </span>
                ) : (
                    <p>{"Realizar el pago"}</p>
                )}
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
