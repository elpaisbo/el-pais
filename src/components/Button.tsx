"use client";
type ButtonProps = {
    text: string;
    onClick: () => void;
};

function Button({ text, onClick }: ButtonProps) {
    return (
        <button
            onClick={onClick}
            className="rounded-sm text-center grid place-items-center p-3 h-full"
        >
            {text}
        </button>
    );
}

export default Button;
