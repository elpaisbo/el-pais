"use client";
import Banner from "@/components/Banner";
import BannerDerechos from "../../../public/images/banners/bannerDerechos.jpg";
import Image from "next/image";
import DerechosRight from "../../../public/images/icons/derechosRight.jpg";
import DerechosIcon from "../../../public/images/icons/derechoIcono.png";
import BannerDividendos from "../../../public/images/banners/bannerDividendos.jpg";
import DerechosLeft from "../../../public/images/icons/derechosLeft.png";
import Link from "next/link";

const derechos = [
    "Intervenir en las juntas generales de accionistas con derecho a voz y voto.",
    "Integrar los órganos electivos de administración y fiscalización interna.",
    "Integrar el Consejo Editorial de El País.",
    "Participar de las utilidades sociales, debiendo observarse igualdad de tratamiento para los accionistas de la misma clase.",
    "Participar, en las mismas condiciones establecidas en el inciso anterior, en la distribución del haber social, en caso de liquidación.",
    "Gozar de preferencia para la suscripción de nuevas acciones.",
    "Impugnar las resoluciones de las juntas generales de accionistas y del directorio de acuerdo con las disposiciones del Código de Comercio. (No podrá ejercer este derecho al accionista que sea deudor moroso de la sociedad por cualquier concepto, cuya obligación conste por título fehaciente e incontrastable).",
    "Negociar libremente sus acciones, salvo lo dispuesto en el artículo 253 del Código de Comercio.",
    "Los demás derechos que le otorgan los Estatutos de la Sociedad vinculados al objeto social, como empresa del rubro de las comunicaciones.",
];

const dividendos = [
    "Las expectativas de retorno para los accionistas",
    "Los planes y proyectos de crecimiento:",
    "La situación de la Sociedad",
    "La situación del sector",
    "La situación del mercado.",
];

function Derechos() {
    return (
        <div className="flex min-h-screen flex-col items-center gap-6 py-4 px-6 sm:px-16 md:px-20 lg:px-40">
            <div>
                <Image
                    key="derechos"
                    alt="Banner Derechos"
                    src={BannerDerechos}
                />
                <div className="flex gap-4 flex-col items-center lg:flex-row">
                    <div className="text-lg">
                        Cada accionista propietario tiene los derechos de:
                        <ol className="list-decimal list-inside text-base flex flex-col gap-2">
                            {derechos.map((derecho) => (
                                <li key={derecho}>{derecho}</li>
                            ))}
                        </ol>
                    </div>
                    <Image
                        src={DerechosRight}
                        alt="Derechos"
                        width={350}
                        height={650}
                    />
                </div>
            </div>
            <div className="flex flex-col">
                <h2 className="text-xl self-center">Informaicion disponible</h2>
                <div className="flex gap-4 flex-col items-center lg:flex-row">
                    <p className="text-justify">
                        Se entregará información relevante a los accionistas en
                        las Juntas Ordinarias y Juntas Extraordinarias de
                        Accionistas. Toda la información vinculada al
                        desenvolvimiento de la Sociedad estará disponible para
                        los accionistas, sin limitación alguna, en nuestra
                        Página Web de Accionistas, activa de manera permanente
                        para los accionistas.
                    </p>
                    <Image
                        src={DerechosIcon}
                        alt="Click"
                        width={100}
                        height={100}
                    />
                </div>
            </div>
            <div>
                <Image
                    key="dividendos"
                    alt="Banner Dividendos"
                    src={BannerDividendos}
                />
                <div className="flex gap-4 flex-col items-center lg:flex-row">
                    <Image
                        src={DerechosLeft}
                        alt="Derechos"
                        width={150}
                        height={300}
                    />
                    <div className="text-lg">
                        El destino de las utilidades sociales de El País se
                        determinará en acuerdos tomados en juntas de
                        accionistas, bajo los siguientes lineamientos de la
                        Política de Dividendos:
                        <ol className="list-decimal list-inside text-base flex flex-col gap-2">
                            <li>
                                La Política de Dividendos estará orientada a
                                establecer un equilibrio entre:
                            </li>
                            <ul className="list-inside list-disc lg:pl-8">
                                {dividendos.map((dividendo) => (
                                    <li key={dividendo}>{dividendo}</li>
                                ))}
                            </ul>
                            <li>
                                La Política de Dividendos otorgará un marco de
                                previsibilidad a la rentabilidad de las acciones
                                en circulación.
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-2 sm:gap-4">
                <h2 className="text-xl underline underline-offset-1">
                    Distribuición de los Dividendos
                </h2>
                <ul className="list-inside list-disc grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 gap-4">
                    <li className="border-4 border-pink-500 p-2">
                        Se distribuirá como dividendos a los accionistas hasta
                        el 90% de las utilidades líquidas del ejercicio.
                    </li>
                    <li className="border-4 border-pink-500 p-2">
                        Los accionistas podrán determinar distribuir un
                        porcentaje mayor, menor o nulo de dividendos, en
                        acuerdos legales.
                    </li>
                </ul>
                <Link
                    href={"."}
                    className="bg-black text-white w-full md:w-2/4 self-center p-3 rounded-md grid place-items-center"
                >
                    <button>Características de las acciones</button>
                </Link>
            </div>
        </div>
    );
}

export default Derechos;
