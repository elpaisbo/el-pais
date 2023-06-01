"use client";
import Image from "next/image";
import Construccion from "../../../public/images/banners/construccion.jpg";
import Contactos from "../../../public/images/banners/contactos.jpg";

function AppGestion() {
    return (
        <div className="flex h-full flex-col items-center gap-4 py-16 px-6 sm:px-16 md:px-20 lg:px-40">
            <h1 className="font-bold text-red-500 text-2xl text-center">
                PÁGINA DE APLICACIÓN DE GESTIÓN DE ACCIONES DE EL PAÍS S.A.
            </h1>
            <h2 className="font-bold text-lg">
                BIENVENID@ ESTIMAD@ ACCIONISTA DE EL PAÍS S.A
            </h2>
            <p className="text-center">
                Si quieres vender, endosar, disponer de tus acciones, envíanos
                un mensaje al email: <span>accionescyv@elpais.bo</span>
            </p>
            <p className="text-center">
                ESTAMOS TRABAJANDO PARA QUE A PARTIR DEL MES DE AGOSTO PUEDAS
                HACER LA GESTIÓN DE TUS ACCIONES EN LÍNEA, CUALQUIER DUDA,
                REALIZA TU CONSULTA A LOS SIGUIENTES CONTACTOS
            </p>
            <div className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2">
                <Image
                    src={Contactos}
                    width={600}
                    height={450}
                    alt="Banner contactos"
                />
                <Image
                    src={Construccion}
                    alt="Banner construcción"
                    width={600}
                    height={450}
                />
            </div>
            <p className=" justify-self-center font-bold text-red-500 text-2xl text-center"></p>
        </div>
    );
}

export default AppGestion;
