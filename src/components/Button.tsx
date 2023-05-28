"use client";
type ButtonProps = {
    text: string;
    onClick: () => void;
};

function Button({ text, onClick }: ButtonProps) {
    return (
        <button onClick={onClick} className="rounded-sm p-3  hover:bg-gray-200">
            {text}
        </button>
    );
}

export default Button;
