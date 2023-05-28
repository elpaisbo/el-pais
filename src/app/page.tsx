import Image from "next/image";
import Banner from "@/components/Banner";
import { bannersInicio } from "../../data/Data";
import DocumentIcon from "../../public/images/icons/accionesCarrito.jpg";
import Carrito from "@/components/Carrito";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center gap-6 py-4 px-6 sm:px-16 md:px-20 lg:px-30">
            {bannersInicio.map((banner) => (
                <Banner
                    key={banner.id}
                    alt={banner.alt}
                    img={banner.img}
                    to={banner.to}
                />
            ))}
            <p className="text-center">En base a los EEFF al 31/12/2022</p>
            <Image
                src={DocumentIcon}
                alt="Icono accion"
                width={100}
                height={50}
            />
            <Carrito />
        </main>
    );
}
