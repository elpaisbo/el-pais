"use client";

import { FormProvider, useForm } from "react-hook-form";
import Input from "./Input";
import { Step, StepLabel, Stepper } from "@mui/material";
import { useState } from "react";
import { formInputs } from "../app/data/Data";
import { motion, AnimatePresence } from "framer-motion";
import Resumen from "./Resumen";
import Pago from "./Pago";
import useCart from "@/app/hooks/useShoppingCart";

type RegisterFormValues = {
    nombre: string;
    apellido: string;
    email: string;
    telefono: string;
    domicilio: string;
    nacionalidad: string;
    ci: string;
    acciones?: number;
};

const steps = ["Registro", "Pedido", "Pago"];

function RegisterForm() {
    const { cart } = useCart();
    const [step, setStep] = useState(0);
    const [data, setData] = useState<RegisterFormValues>({
        acciones: cart,
    } as RegisterFormValues);
    const methods = useForm<RegisterFormValues>();

    const animation = {
        hidden: { x: -10, opacity: 0 },
        visible: { x: 0, opacity: 1 },
        exit: { opacity: 0 },
    };

    const dynamicForm = [
        <motion.form
            key={0}
            variants={animation}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="grid gap-2"
            onSubmit={methods.handleSubmit(onSubmit)}
        >
            <h2 className="text-red-500 font-bold">Detalles de Facturación</h2>
            {formInputs.map((input) => (
                <Input
                    key={input.id}
                    id={input.id}
                    label={input.label}
                    validations={input.validations}
                />
            ))}
        </motion.form>,
        <Resumen key={1} />,
        <Pago key={2} data={data} />,
    ];

    function onSubmit(data: RegisterFormValues) {
        console.log(data);
    }

    function handleNext(data: any) {
        setData({ ...data });
        if (data.nombre) {
            setStep((prev) => prev + 1);
        }
    }

    return (
        <div
            className="flex flex-col w-full gap-5 bg-gray-300 rounded-sm px-8 py-6 md:w-2/4"
            id="form"
        >
            <div>
                <Stepper activeStep={step} alternativeLabel>
                    {steps.map((step) => (
                        <Step key={step}>
                            <StepLabel>{step}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </div>
            <FormProvider {...methods}>
                <AnimatePresence>{dynamicForm[step]}</AnimatePresence>
            </FormProvider>
            <div className="flex justify-between">
                {step > 0 && (
                    <button
                        onClick={() => setStep((prev) => prev - 1)}
                        className="bg-black text-white my-4 p-2 w-2/5 self-end rounded-md"
                    >
                        Atrás
                    </button>
                )}
                {step < 2 && (
                    <button
                        onClick={methods.handleSubmit(handleNext)}
                        className="bg-black text-white my-4 p-2 w-2/5 justify-self-end rounded-md"
                    >
                        Siguiente
                    </button>
                )}
            </div>
        </div>
    );
}

export default RegisterForm;
