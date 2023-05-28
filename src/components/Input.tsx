"use client";
import { useFormContext } from "react-hook-form";
import ErrorMessage from "./ErrorMessage";

type InputProps = {
    type?: string;
    id: string;
    label: string;
    validations?: {
        required: string;
        minLength?: {
            value: number;
            message: string;
        };
        pattern?: {
            value: RegExp;
            message: string;
        };
    };
};

function Input({ type, id, label, validations }: InputProps) {
    const {
        register,
        formState: { errors },
    } = useFormContext();
    return (
        <div className="flex flex-col gap-2">
            <label htmlFor={id}>{label}</label>
            <input
                className="border border-black rounded-sm w-full p-1 outline-1"
                type="text"
                id={id}
                {...register(id, validations)}
            />
            <ErrorMessage errors={errors[id]} />
        </div>
    );
}

export default Input;
