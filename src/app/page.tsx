"use client";
import Image from "next/image";
import Banner from "@/components/Banner";
import { bannersInicio } from "./data/Data";
import DocumentIcon from "../../public/images/icons/accionesCarrito.jpg";
import Carrito from "@/components/Carrito";
import RegisterForm from "@/components/RegisterForm";
import InfoPdf from "@/components/InfoPdf";
import Banner3 from "../../public/images/banners/banner3.jpg";
import Link from "next/link";
import Button from "../components/Button";

export default function Home() {
    function handleClick() {}

    return (
        <main className="flex min-h-screen flex-col items-center gap-6 py-4 px-6 sm:px-16 md:px-20 lg:px-30">
            <div className="bg-gray-300 p-4 md:px-8 flex flex-col gap-2">
                <h2 className="text-center font-bold">
                    “Cómprate El País”, El País S.A. pone a disposición de sus
                    lectores 40.000 acciones
                </h2>
                <p className="max-h-32 overflow-y-auto text-justify scrollbar px-2">
                    El reconocido periódico El País S.A. de Bolivia, que celebra
                    sus 32 años de trayectoria en junio de 2023, ha lanzado una
                    campaña de capitalización denominada "Cómprate El País". A
                    través de esta iniciativa, busca incluir a ciudadanos
                    interesados en el periodismo como accionistas de El País
                    S.A.. La venta de acciones, valoradas en Bs100 cada una, se
                    llevará a cabo mediante una plataforma web y se espera que
                    los accionistas no solo obtengan beneficios financieros,
                    sino también una suscripción anual gratuita y la posibilidad
                    de influir en las decisiones y la agenda noticiosa. El
                    rendimiento económico de El País S.A. ha sido favorable, y
                    se prevé un mejor desempeño empresarial para este año
                    gracias a nuevos acuerdos y la expansión de la publicidad
                    digital en su página web{" "}
                    <Link className="text-red-500" href={"https://elpais.bo/"}>
                        El País
                    </Link>{" "}
                    Esta campaña innovadora de venta de acciones busca
                    involucrar a los lectores en la consolidación de un
                    periodismo comprometido con la unidad y prosperidad del
                    país, aprovechando los mecanismos digitales y las pasarelas
                    de pago para facilitar la participación de cualquier
                    interesado, tanto en Bolivia como en el extranjero.
                </p>
                <Link
                    href={
                        "https://drive.google.com/file/d/1FgXUbU7LRxsEgFgXYVlISIz_-3pJNtDO/view?usp=sharing"
                    }
                >
                    <button className="p-3 rounded-md bg-black text-white hover:bg-red-500 w-full">
                        Revisa el pdf completo aquí
                    </button>
                </Link>
            </div>
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
            <RegisterForm />
            <InfoPdf />
            <Banner
                key="recorrido"
                alt="Banner Recorrido"
                img={Banner3}
                to="."
            />
        </main>
    );
}
