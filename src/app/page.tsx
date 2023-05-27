import Image from "next/image";
import Banner from "../../components/Banner";
import { bannersInicio } from "../../data/Data";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center gap-6 py-4 px-6 sm:px-16 md:px-20 lg:px-30">
            {bannersInicio.map((banner) => (
                <Banner
                    key={banner.id}
                    alt={banner.alt}
                    img={banner.img}
                    to={banner.to}
                    type={banner.type}
                />
            ))}
            <p className="text-center">En base a los EEFF al 31/12/2022</p>
            <div id="form">lol</div>
        </main>
    );
}
