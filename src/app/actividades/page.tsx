"use client";
import Image from "next/image";
import BannerActividades from "../../../public/images/banners/bannerActividades.jpg";
import AccionesLeft from "../../../public/images/icons/accionesLeft.jpg";
import { useState } from "react";
import Organigrama from "../../../public/images/icons/organigrama.jpg";
import { IconoirProvider, Cancel, Cpu } from "iconoir-react";
import Redes from "../../../public/images/icons/redes.png";
import Competencias from "../../../public/images/icons/competencias.png";
import Trabajo from "../../../public/images/icons/trabajo.png";
import Creciendo from "../../../public/images/icons/creciendo.png";
import BannerPlan from "../../../public/images/banners/bannerPlan.jpg";
import AccionesRight from "../../../public/images/icons/accionesRight.png";
import Alerta from "../../../public/images/icons/alert.png";
import Link from "next/link";

const planes = [
    "Afianzamiento digital",
    "Potenciamiento de la facturación online",
    "Posicionamiento de marca en nuevos segmentos",
    "Migración a nuevos formatos",
    "Mejoramiento de nuestras aplicaciones móviles",
    "Integración de nuevos géneros periodísticos",
    "Incorporación de nuevas plataformas digitales para la eficiencia del trabajo y la prestación de los servicios",
    "Activación de mecanismos de articulación sectorial",
    "Desarrollo de competencias laborales innovadoras",
];

function Actividades() {
    const [organigrama, setOrganigrama] = useState(false);
    return (
        <div className="flex min-h-screen flex-col items-center gap-6 py-4 px-6 sm:px-16 md:px-20 lg:px-40">
            <div>
                {organigrama && (
                    <div
                        className="fixed w-full h-full top-0 right-0 bg-black-transparent grid place-items-center"
                        onClick={() => setOrganigrama(false)}
                    >
                        <button
                            className="absolute top-2.5 right-2.5 text-white hover:text-black"
                            onClick={() => setOrganigrama(false)}
                        >
                            <IconoirProvider>
                                <Cancel />
                            </IconoirProvider>
                        </button>
                        <Image
                            onClick={(e) => e.stopPropagation()}
                            className="w-full  md:w-2/3 lg:w-3/4"
                            src={Organigrama}
                            alt="Organigrama"
                            width={1000}
                            height={750}
                        />
                    </div>
                )}
                <Image src={BannerActividades} alt="Banner actividades" />
                <div className="flex gap-4 flex-col md:flex-row">
                    <Image
                        src={AccionesLeft}
                        alt="Icono acciones izquierda"
                        width={450}
                        height={600}
                    />
                    <div className="grid self-center gap-4">
                        <ul className="list-inside list-disc text-lg">
                            <li>Producción y difusión noticiosa</li>
                            <li>
                                Venta permanente de publicidad y suscripciones
                            </li>
                        </ul>
                        <button
                            onClick={() => setOrganigrama(true)}
                            className="bg-black p-3 rounded-md text-white"
                        >
                            Organigrama
                        </button>
                    </div>
                </div>
            </div>
            <div className="grid grid-rows-3 gap-4 md:grid-cols-3 md:grid-rows-1">
                <Image src={Trabajo} alt="Trabajo" />
                <Image src={Redes} alt="Redes" />
                <Image src={Competencias} alt="Competencias" />
            </div>

            <div className="flex flex-col gap-4 bg-gray-300 p-4 items-center">
                <Image src={Creciendo} alt="Creciendo" />
                <p className="text-justify">
                    Más allá de ser el periódico más potente en la región sur de
                    Bolivia y estar entre los periódicos más leídos del país,
                    ¡seguimos creciendo! poniéndonos nuevos retos y trazando
                    nuestras acciones en un Plan de Acción Trienal.
                </p>
            </div>
            <div>
                <Image key="derechos" alt="Banner Derechos" src={BannerPlan} />
                <div className="flex gap-4 flex-col items-center lg:flex-row">
                    <div className="text-lg">
                        Nuestro plan de expansión y fortalecimiento consiste en:
                        <ol className="list-decimal list-inside text-base flex flex-col gap-2">
                            {planes.map((plan) => (
                                <li key={plan}>{plan}</li>
                            ))}
                        </ol>
                    </div>
                    <Image
                        src={AccionesRight}
                        alt="Derechos"
                        width={350}
                        height={650}
                    />
                </div>
            </div>
            <div className="grid w-full place-items-center bg-gray-300 p-8 gap-4">
                <div className="flex gap-4 items-center">
                    <Image src={Alerta} alt="Alerta" />
                    <p>
                        ¿Por qué hemos decidido financiar nuestros proyectos
                        mediante la emisión de acciones y la oferta privada?
                    </p>
                </div>

                <p className="font-bold">
                    Si deseas saber el porqué revisa nuestro documento de Formas
                    de Financiamiento
                </p>
                <Link
                    href={
                        "https://drive.google.com/file/d/1OR97nBWzGsc_FT8T_rp4AEJGp1w4qyS8/view?usp=sharing"
                    }
                >
                    <button className="bg-black text-white p-3 rounded-md">
                        Formas de financiamiento
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Actividades;
