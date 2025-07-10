"use client";
import { useFormContext } from "react-hook-form";
import ErrorMessage from "./ErrorMessage";
import BirthdateInput from "./BirthdateInput";

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
        validate?: {
            [key: string]: (value: any) => boolean | string;
        };
    };
    options?: any;
};

function Input({ type, id, label, validations, options }: InputProps) {
    const {
        register,
        formState: { errors },
    } = useFormContext();

    if (type === 'birthdate') {
        return (
            <BirthdateInput
                id={id}
                label={label}
                validations={validations}
                options={options}
            />
        );
    }

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
