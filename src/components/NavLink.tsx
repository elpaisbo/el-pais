import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

type NavLinkProps = {
    text: string;
    to: string;
    setNavMenu?: Dispatch<SetStateAction<boolean>>;
};

function NavLink({ text, to, setNavMenu }: NavLinkProps) {
    function handleClick() {
        if (setNavMenu) {
            setNavMenu(false);
        }
    }

    return (
        <Link href={to} onClick={handleClick}>
            <p className="hover:underline">{text}</p>
        </Link>
    );
}

export default NavLink;
