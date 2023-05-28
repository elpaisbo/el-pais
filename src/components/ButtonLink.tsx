import Link from "next/link";

type ButtonLinkProps = {
    text: string;
    href: string;
};

function ButtonLink({ text, href }: ButtonLinkProps) {
    return (
        <button className="p-3 rounded-md text-white bg-red-500">
            <Link href={href}>{text}</Link>
        </button>
    );
}

export default ButtonLink;
