"use client";
import Image from "next/image";
import Construccion from "../../../public/images/banners/construccion.jpg";
import Contactos from "../../../public/images/banners/contactos.jpg";

function AppGestion() {
    return (
        <div className="flex min-h-screen flex-col items-center gap-10 py-4 px-6 sm:px-16 md:px-20 lg:px-40">
            <h1 className="font-bold text-red-500 text-2xl">
                PÁGINA DE APLICACIÓN DE GESTIÓN DE ACCIONES DE EL PAÍS S.A.
            </h1>
            <p className="text-center">
                LAMENTAMOS LOS INCONVENIENTES, NOS ENCONTRAMOS TRABAJANDO EN LA
                CONSTRUCCIÓN DE LA APLICACIÓN, CUALQUIER CONSULTA NO DUDE EN
                COMUNICARSE CON NOSOTROS.
            </p>
            <div className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2">
                <Image
                    src={Construccion}
                    alt="Banner construcción"
                    width={600}
                    height={450}
                />
                <Image
                    src={Contactos}
                    width={600}
                    height={450}
                    alt="Banner contactos"
                />
            </div>
            <p className=" justify-self-center font-bold text-red-500 text-2xl text-center">
                MIENTRAS NUESTRA APLICACIÓN ESTÁ EN CONSTRUCCIÓN, REALICE SUS
                ENDOSOS O SOLICITE UNA COPIA DEL LIBRO DIGITAL DE ACCIONISTAS
                ENVIANDO UN EMAIL A: accionescyv@elpais.bo
            </p>
        </div>
    );
}

export default AppGestion;
