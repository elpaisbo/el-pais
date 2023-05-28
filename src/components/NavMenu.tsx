import NavLink from "./NavLink";
import { navLinks } from "../../data/Data";
import { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";

type NavMenuProps = {
    setNavMenu: Dispatch<SetStateAction<boolean>>;
};

function NavMenu({ setNavMenu }: NavMenuProps) {
    function handleOutsideClick() {
        setNavMenu(false);
    }

    const animation = {
        hidden: { x: 125, opacity: 0 },
        visible: { x: 0, opacity: 1 },
        exit: { x: 125, opacity: 0 },
    };

    return (
        <div
            className="fixed top-0 z-20 w-full h-full bg-black-transparent"
            onClick={handleOutsideClick}
        >
            <motion.div
                variants={animation}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.45 }}
                exit="exit"
                onClick={(e) => e.stopPropagation()}
                className="fixed w-3/5 right-0 h-full z-30 bg-red-700 text-white top-0 flex flex-col gap-4 px-8 py-16"
            >
                <NavLink text="Inicio" to="/" setNavMenu={setNavMenu} />
                {navLinks.map((navLink) => (
                    <NavLink
                        text={navLink.text}
                        to={navLink.to}
                        setNavMenu={setNavMenu}
                    />
                ))}
            </motion.div>
        </div>
    );
}

export default NavMenu;
