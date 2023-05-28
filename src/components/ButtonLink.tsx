import Link from "next/link";

type ButtonLinkProps = {
    text: string;
    href: string;
};

function ButtonLink({ text, href }: ButtonLinkProps) {
    return (
        <button className="p-3 rounded-md text-white bg-red-500">
            <a href={href}>{text}</a>
        </button>
    );
}

export default ButtonLink;
