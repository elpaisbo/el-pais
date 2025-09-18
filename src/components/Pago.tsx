"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Libelula from "../../public/images/logos/libelula.jpg";
import useCart from "@/app/hooks/useShoppingCart";
import { useMutation } from "@tanstack/react-query";
import { postRegister } from "@/request/postRegister";
import UseAnimations from "react-useanimations";
import loading from "react-useanimations/lib/loading";

function Pago({ data }: any) {
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
            console.log('Respuesta completa:', res); // Para debugging
            console.log('Data interna:', res?.data?.data); // Para ver la estructura interna
            
            // Acceder a la URL dentro de res.data.data.url_pasarela_pagos
            const url = res?.data?.data?.url_pasarela_pagos;
            
            if (typeof url === 'string' && url.startsWith('http')) {
                console.log('Redirigiendo a:', url); // Para debugging
                // Usar window.location.href para URLs externas
                window.location.href = url;
            } else {
                console.error('No valid URL for payment gateway:', res);
                console.error('URL encontrada:', url); // Para debugging
                alert('Error: No se pudo obtener la URL de pago. Por favor intenta de nuevo.');
            }
        },
        onError: (error) => {
            console.error('Error en el registro:', error);
            alert('Error al procesar el registro. Por favor intenta de nuevo.');
        }
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
                disabled={mutation.isLoading}
                className="bg-red-500 text-white my-4 p-2 w-full justify-self-end rounded-md disabled:opacity-50"
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
