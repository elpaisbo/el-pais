"use client";
import Image from "next/image";
import BannerFelicidades from "../../../public/images/banners/bannerFelicidades.jpg";
import BannerSocios from "../../../public/images/banners/bannerSocios.jpg";
import Banner from "@/components/Banner";

function Exito() {
    return (
        <div className="flex min-h-screen flex-col items-center gap-6 py-4 px-6 sm:px-16 md:px-20 lg:px-40">
            <Image src={BannerFelicidades} alt="Banner felicidades" />
            <Banner alt="Banner socios" img={BannerSocios} to="/app-gestion" />
        </div>
    );
}

export default Exito;
