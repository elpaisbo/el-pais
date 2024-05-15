import Link from "next/link";

type ButtonLinkProps = {
    text: string;
    href: string;
};

function ButtonLink({ text, href }: ButtonLinkProps) {
    return (
        <Link className="p-3 rounded-md text-white bg-red-500 grid place-items-center" href={href}>
            <button >
                {text}
            </button>
        </Link>
    );
}

export default ButtonLink;
