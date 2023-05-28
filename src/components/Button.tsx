"use client";
type ButtonProps = {
    text: string;
    onClick: () => void;
};

function Button({ text, onClick }: ButtonProps) {
    return (
        <button
            onClick={onClick}
            className="rounded-sm hover:bg-gray-200 text-center grid place-items-center p-3"
        >
            {text}
        </button>
    );
}

export default Button;
